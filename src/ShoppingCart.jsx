import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './ShoppingCart.css'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupAddon from 'react-bootstrap/InputGroup'
import Input from 'react-bootstrap/InputGroup'

// Component contains all visual elements and function calls related to
// functionality that can happen in the Shopping Cart, including
// incrementing/decrementing quantity of an item in cart and removing item from
// cart entirely.
// Include cart total.
class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <h2 className="shoppingtitle">SHOPPING CART</h2>
        <div className="cards">
          {
            Object.keys(this.props.contents).map(
              (key) =>
              <div className="flex-column">
                <div className="flex-row-2">
                  <div className="flex-row">
                    <img id="img" src={this.props.contents[key].pic} alt="Card image cap"></img>
                    {/* Includes key information about product type */}
                    <div className="card-body">
                      <h5 className="oswald">{this.props.contents[key].name} ${this.props.contents[key].cost}</h5>
                      <div>{this.props.contents[key].size}-Wick Candle</div>
                      <div>{this.props.contents[key].burntime}hr Burntime</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <Button variant="outline-dark" onClick={()=>this.props.removeOne(this.props.contents[key])} size="sm">-</Button>
                          </div>
                          <div className="form-control"> {this.props.contents[key].quantity}</div>
                          <div className="input-group-append">
                              <Button variant="outline-dark" onClick={()=>this.props.addToCart(this.props.contents[key])} size="sm">+</Button>
                          </div>
                      </div>
                  </div>
                  <div className="x">
                    <Button className="x_style"onClick={()=>this.props.removeAll(this.props.contents[key])}>
                      X
                    </Button>
                  </div>
                </div>
              </div>
            )
          }
          <div id="total">TOTAL: ${this.props.cartTotal}</div>
        </div>
      </div>
    )
  }

}

export default ShoppingCart;
