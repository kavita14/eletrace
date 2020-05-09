import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Header from './Header';
import ProductList from './ProductList';
import OrderPlaced from './OrderPlaced';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerData:[],
      cartItems: [],
      orderPlaced: false,
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  componentDidMount() {
    let self= this;
    axios.get('http://demo2965540.mockable.io/burgerData').then(res => {
      self.setState({burgerData:res.data}, function(){
          })
      }).catch(function (error) {

      });
  }

  placeOrder() {
    this.setState({orderPlaced:true});
  }

  applyFilter(filter,value) {
    const burgerData = [...this.state.burgerData];
    let filterData = burgerData.filter((data)=> {
      return data[filter] == value;
    });
    this.setState({burgerData:filterData});
  }

  addToCart(item) {
    let cartItems = [...this.state.cartItems];
    cartItems.push(item);
    this.setState({cartItems});
  }
   removeCartItem(item) {
     let cartItems = [...this.state.cartItems];
     const index = cartItems.findIndex(x => x.id ===item.id);
     cartItems.splice(index,1);
     this.setState({cartItems});
   }



  render() {
  return (<div className="App">
  <Header cartItems={this.state.cartItems} applyFilter={this.applyFilter} />
  {!this.state.orderPlaced && <ProductList burgerData={this.state.burgerData} addToCart={this.addToCart} cartItems={this.state.cartItems} removeCartItem={this.removeCartItem} placeOrder={this.placeOrder} />}
  {this.state.orderPlaced && <OrderPlaced cartItems={this.state.cartItems} />}
</div>
  );
}
}

export default App;
