import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import DisplayList from './DisplayList'
import ShoppingCart from './ShoppingCart'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FilteredList.css'

// This Component contains all sorting, filtering, and aggregation functionality.
class FilteredList extends React.Component {
  // Binds all functions related to sorting, filtering, and aggregation logic
  constructor(props) {
    super(props);
    // State includes all selected filter and sort options as well as the cart total
    // and cart contents. These should be initialzed as none to present all candle items
    // and an empty shopping cart.
    this.state = {
      season: "All",
      size: "Al",
      sort: "none",
      cartTotal: 0,
      // cart contents will be a JS object, where key is product ID and value is product's info
      cartContents: {}
    }
    this.addToCart=this.addToCart.bind(this);
    this.removeOne=this.removeOne.bind(this);
    this.removeAll=this.removeAll.bind(this);
    this.onSortByPrice=this.onSortByPrice.bind(this);
    this.onSelectFilterSize=this.onSelectFilterSize.bind(this);
    this.onSelectFilterSeason=this.onSelectFilterSeason.bind(this);
    this.matchesFilters=this.matchesFilters.bind(this);
    this.sortOptions=this.sortOptions.bind(this);
  }

  // Adds a single product to the cart and updates the cart total
  // *used in DisplayList when user adds from product list and in ShoppingCart Component
  // when the user wants to increment the quantity of one product.
  addToCart(object) {
    let newContents = this.state.cartContents;
    if(object.id in newContents){
      newContents[object.id]["quantity"]++;
    } else {
      let value = {quantity: 1, name: object.name, cost: object.cost, id: object.id, pic:object.pic, size:object.size, burntime:object.burntime}
      newContents[object.id]=value
    }
    this.setState({cartContents: newContents});
    this.calculateTotal();
  }

  // Reduces the quantity of a product by one and updates the cart total
  // *used in ShoppingCart component when user selects remove one option
  removeOne(object){
    let newContents = this.state.cartContents;
    newContents[object.id]["quantity"]--;
    if (newContents[object.id]["quantity"]===0){
      delete newContents[object.id];
    }
    this.setState({cartContents:newContents});
    this.calculateTotal();
  }

  // Removes entire product type from the cart and updates the cart total
  // *used in ShoppingCart component when user selects remove all option
  removeAll(object){
    let newContents = this.state.cartContents;
    delete newContents[object.id];
    this.setState({cartContents: newContents});
    this.calculateTotal();
  }

  // calculates the total cost of the contents in the shopping cart.
  calculateTotal(){
    let totalCost = 0;
    for (var key in this.state.cartContents){
      let cost = this.state.cartContents[key].quantity*this.state.cartContents[key].cost;
      totalCost = totalCost+ cost;
    }
    this.setState({cartTotal:totalCost});
  }

  // updates the sorting option selected by the user
  // *used by display list component when user selects sorting option.

  onSortByPrice = event =>{
    this.setState({
      sort: event
    });
  }

  // updates the season filtering option selected by the user
  // *used by display list component when user selects filtering option.

  onSelectFilterSeason = event => {
    this.setState({
      season: event
    })
  }

  // updates the size filtering option selected by the user.
  // *used by display list component when user selects filtering option.
  onSelectFilterSize = event => {
    this.setState({
      size: event
    })
  }

  // determines which filtering options have been selected by the user
  matchesFilters = item => {
    if(this.state.season==="All"&&this.state.size==="Al"){
      return true;
    } else if(this.state.season==="All"&&this.state.size===item.size){
      return true;
    } else if(this.state.season===item.season&&this.state.size==="Al"){
      return true;
    } else if(this.state.season===item.season&&this.state.size===item.size){
      return true;
    } else {
      return false;
    }
  }

  // sorts the product options according to the sorting option selected by user.
  // *used by display list when user selects sorting option.
  sortOptions(options) {
    if(this.state.sort==="lowhigh"){
      options.sort((a, b)=> a.cost-b.cost);
    } else if(this.state.sort==="highlow"){
      options.sort((a,b)=>b.cost-a.cost);
    }
    return options;
  }

  // renders visual elements and passes props to child components
  render() {
    return (
      <div className="filtered">
        <Navbar expand="xl" variant="light" className="Navbar">
          <Navbar.Brand className="brand">DISCOUNT CANDLE</Navbar.Brand>
        </Navbar>
        <div className="row">
          {/* Pass a filtered and sorted list of product options to be displayed */}
          <DisplayList  list={this.sortOptions(this.props.list.filter(this.matchesFilters))}
                        key={0}
                        addToCart={this.addToCart}
                        size={this.onSelectFilterSize}
                        season={this.onSelectFilterSeason}
                        sort={this.onSortByPrice}
                        />
          <ShoppingCart contents={this.state.cartContents}
                        key={1}
                        addToCart={this.addToCart}
                        removeOne={this.removeOne}
                        removeAll={this.removeAll}
                        cartTotal={this.state.cartTotal}/>
        </div>
      </div>
    )
  }

}

export default FilteredList;
