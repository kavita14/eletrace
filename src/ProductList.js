import React, { Component } from 'react';
import './App.css';
import CartItems from './CartItems';
import axios from 'axios';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerData:[],
    }
  }

  render() {
    const {burgerData, addToCart, cartItems, removeCartItem, placeOrder} = this.props;
    return (<div className="row">
       <div className="col-lg-6">
       <div style={{marginTop:'50px'}} className="row">{burgerData.map((data)=>(<div className="col-lg-4">
          <div className="card card-price">
             <div className="card-img">
                <a href="#">
                   <img height="200" width="200" src={data.imageUrl} />
                   <div className="card-caption">
                      <span className="h2">{data.productName}</span>
                   </div>
                </a>
             </div>
             <div className="card-body">
             <span>Category:{data.category}</span><br/>
             <span>Rating:{data.rating}</span>
                <div className="price">₹ {data.price}</div>
                <ul className="details">
                   {data.ingredients.join(",")}
                </ul>
                <a onClick={()=>{addToCart(data)}} className="btn btn-primary btn-lg btn-block buy-now">
                Add to Cart <span className="glyphicon glyphicon-triangle-right"></span>
                </a>
             </div>
          </div>
       </div>))}
       </div>
       </div>
       <div style={{marginLeft:'10px'}} className="col-lg-5">
<CartItems cartItems={cartItems} removeCartItem={removeCartItem} placeOrder={placeOrder} />
       </div>
    </div>);
  }
}

export default ProductList;
