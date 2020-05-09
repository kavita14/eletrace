import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class OrderPlaced extends Component {
  render() {
    const {cartItems} = this.props;
    return (<div>
      Thank you for placeing your Order, You have ordered {cartItems.length}
      <a href="/"> <button className="btn btn-info"> Continue Shopping </button></a>
    </div>);
  }
}

export default OrderPlaced;
