import React, { Component } from 'react';
import DescriptionList from './DescriptionList.jsx';

const Description = (props) => {
  return (
    <div class="product-description">
      {props.price}
      <DescriptionList descriptions={props.descriptions}/>
    </div>
  )
}

export default Description;