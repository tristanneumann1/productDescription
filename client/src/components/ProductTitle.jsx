import React, { Component } from 'react';

const ProductTitle = (props) => {
  return (
    <div class="product-title">
      {props.productName} <br />
      {props.rating}
    </div>
  )
}

export default ProductTitle;