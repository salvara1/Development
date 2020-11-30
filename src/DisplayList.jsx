import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './DisplayList.css';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


// This Component presents sorting, filtering options, shows the updated product list,
// and allows user to add an item to the cart.
class DisplayList extends React.Component {

  constructor(props) {
    super(props);
  }
  // renders visual elements
  render() {
    return (
      <div className="column">
        <h2 className="candletitle">CANDLES</h2>
        {/* renders sorting and filtering options */}
        <Navbar expand="xl" variant="light" className="color">
          <NavDropdown title="Filter by Size" id="collasible-nav-dropdown">
            <Nav.Item><Nav.Link eventKey="Al" onSelect={this.props.size}>All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="3" onSelect={this.props.size}>3-wick</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="1" onSelect={this.props.size}>1-wick</Nav.Link></Nav.Item>
          </NavDropdown>
          <NavDropdown title="Filter by Season" id="collasible-nav-dropdown">
            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.season}>All</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Winter" onSelect={this.props.season}>Winter</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Summer" onSelect={this.props.season}>Summer</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Spring" onSelect={this.props.season}>Spring</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="Fall" onSelect={this.props.season}>Fall</Nav.Link></Nav.Item>
          </NavDropdown>
          <NavDropdown title="Sort by Price" id="collasible-nav-dropdown">
            <NavDropdown.Item eventKey="none"  onSelect={this.props.sort}>Select</NavDropdown.Item>
            <NavDropdown.Item eventKey="lowhigh"  onSelect={this.props.sort}>Low-High</NavDropdown.Item>
            <NavDropdown.Item eventKey="highlow"  onSelect={this.props.sort}>High-Low</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
        <div className="card-deck">
          {/* Creates a card for every product in the sorted/filtered product list */}
          {this.props.list.map(
            (item) =>
            <div className="card">
              <img className="card-img-top" src={item.pic} alt="Card image cap"></img>
              <h4>{item.name}</h4>
              <div className="card-body">
                <div className="align-bug">{item.season} Collection</div>
                <div className="align-bug">{item.size}-Wick Candle</div>
                <div className="align-bug">{item.burntime}hr Burn Time</div>
              </div>
              <h5 id="cost">${item.cost}</h5>
              {/* Allows user to add the current item to cart */}
              <Button onClick={()=>this.props.addToCart(item)} variant="dark" size="sm" block>
                + Add to Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default DisplayList;
