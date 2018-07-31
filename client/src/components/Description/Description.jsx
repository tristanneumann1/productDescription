import React, { Component } from 'react';
import DescriptionList from './DescriptionList.jsx';
import style from '../../style/styles.css';

const Description = (props) => {
  let hoveredPicture = '';
  if (props.hoveredPicture !== '') {
    hoveredPicture = <img src={`https://fakeimg.pl/640x480/?text=${props.hoveredPicture}`} className={style.picFloat}/>;
  }
  return (
    <div className={style.productDescription}>
      {hoveredPicture}
      <div className={style.priceContainer}>
        <div className={style.priceTitle}>
          Price:
        </div> 
        <div className={style.price}>
          <span className={style.priceText}>{`$${props.price}`}</span> & <span class="bold">FREE Shipping</span> on orders over $25 shipped by Amazon.
        </div>
      </div> <br />
      <DescriptionList descriptions={props.descriptions}/>
    </div> 
  );
};

export default Description;