import React, { Component } from 'react';
import style from '../style/styles.css';

const ProductTitle = (props) => {
  // let stars = [];
  // for (let i = 0; i < 5; i++) {
  //   stars.push(<img src="style/images/star.png" alt="star" />);
  // }
  let rating = (props.ratings && props.ratings.length) ? props.ratings.reduce((a, b) => a + b, 0) / props.ratings.length : 0;
  let halfStars = Math.round(rating / 0.5);
  let ratingWidth = ((halfStars * -0.5 + 5) * -16) - ((halfStars % 2 === 0) ? 0 : 162);
  // console.log('star rating: ', halfStars, ratingWidth);
  return (
    <div className={style.productTitle}>
      <a href="#">Amazon Seller</a><br />
      {props.productName}<br />
      <div className={style.floated}>
        <img src="https://s3-us-west-1.amazonaws.com/mormont/stars.png" alt="star" title={`${Math.round(rating * 10) / 10} out of 5 stars`} style={{
          left: `${ratingWidth}px`,
          // left: '-170px',
          width: 'auto',
          height: '16px',
          position: 'relative',
        }}/>
      </div>
      <span className={style.downArrow}>{'\u25BE'}</span>
      <a href='#'>{+(props.ratings && props.ratings.length)} customer reviews</a> | 
      <a href='#'>{+(props.questions)} answered questions</a>
      <div className={style.borderBottom} />
    </div>
  );
};

export default ProductTitle;