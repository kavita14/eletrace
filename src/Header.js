import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter:'',
      value:'',
    }
    this.setFilterType = this.setFilterType.bind(this);
  }
  setFilterType(event) {
    this.setState({filter: event.target.value});
  }
  setFilterValue(event) {
    this.setState({value:event.target.value});
  }

  render() {
    const {applyFilter} = this.props;
    const {filter,value} = this.state;
    return (<div id="header">
    <div style={{paddingTop:'20px'}}><select id="products" onChange={(event)=>{this.setFilterType(event)}}>
    <option hidden value=""></option>
  <option value="category">Category</option>
  <option value="rating">Rating</option>
  <option value="productName">Product Name</option>
</select>


    <input type="text" onBlur={(event)=>{this.setFilterValue(event)}} width="100" />
    <button onClick={()=>{applyFilter(filter,value)}}> Apply Filter </button>
</div>
</div>
    );
  }
}

export default Header;
