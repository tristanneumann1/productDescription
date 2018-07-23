import React, { Component } from 'react';
import DescriptionList from './DescriptionList.jsx';

const Description = (props) => {
  return (
    <div class="product-description">
      <div class="price-container">
        <div class="price-title">
          Price:
        </div> 
        <div class="price">
          <span class="price-text">{`$${props.price}`}</span> & <span class="bold">FREE Shipping</span> on orders over $25 shipped by Amazon.
        </div>
      </div> <br />
      <DescriptionList descriptions={props.descriptions}/>
    </div> 
  )
}

export default Description;