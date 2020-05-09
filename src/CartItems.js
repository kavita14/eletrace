import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CartItems extends Component {
  cartTotal() {
    let priceTotal = 0;
    this.props.cartItems.forEach((item)=> {
      priceTotal += item.price;
    });
    return priceTotal;
  }
  render() {
    const {cartItems, removeCartItem, placeOrder } = this.props;
    if(cartItems.length === 0) {
      return [];
    }
    return(<div className="row" style={{marginTop:'100px'}}>
  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-price">Price</label>
    <label className="product-removal">Remove</label>

  </div><ul className="list-group">{cartItems.map((data)=>(<li className="list group item"><div className="product">
    <div className="product-image">
      <img src={data.imageUrl} height="50" width="50" />
    </div>
    <div className="product-details">
      <div className="product-title">{data.productName}</div>
    </div>
    <div className="product-price">₹ {data.price}</div>
    <div className="product-removal">
      <button className="btn btn-danger" onClick={()=>{removeCartItem(data)}}>
        Remove
      </button>
    </div>
  </div></li>))}
  </ul>
  <div className="totals">
    <div className="totals-item">
      <label>Total</label>
      <div className="" id="cart-subtotal"> ₹ {this.cartTotal()}</div>
    </div>
  </div>

      <button className="checkout" onClick={placeOrder}>Place Order</button>

</div>);
  }
}

export default CartItems;
