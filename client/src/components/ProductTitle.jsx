import React, { Component } from 'react';

const ProductTitle = (props) => {
  return (
    <div class="product-title">
      <a href="#">Amazon Seller</a> <br />
      {props.productName} <br />
      {props.rating}
    </div>
  );
};

export default ProductTitle;