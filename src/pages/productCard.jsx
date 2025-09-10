import React, { Component } from 'react'

export  class ProductCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  productDetails =[
      {
        product_name: "Sample Product A",
        price: 250,
        status: "In Stock",
      },
      {
        product_name: "Sample Product B",
        price: 480,
        status: "Out of Stock",
      },
      {
        product_name: "Sample Product C",
        price: 120,
        status: "In Stock",
      }];
  render() {
    return <div>
        <div>{this.productDetails.map((product, index) => (
        <div key={index}>
          <h3>{product.product_name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Status:<span>{product.status}</span></p>
        </div>
      ))}</div>
    </div>;
  }
}
