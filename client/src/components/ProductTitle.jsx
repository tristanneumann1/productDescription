import React, { Component } from 'react';
import style from '../../dist/style/styles.css';

const ProductTitle = (props) => {
  // let stars = [];
  // for (let i = 0; i < 5; i++) {
  //   stars.push(<img src="style/images/star.png" alt="star" />);
  // }
  let halfStars = Math.round(props.rating / 0.5);
  let ratingWidth = ((halfStars * -0.5 + 5) * -16) - ((halfStars % 2 === 0) ? 0 : 162);
  console.log('star rating: ', halfStars, ratingWidth);
  return (
    <div className={style.productTitle}>
      <a href="#">Amazon Seller</a> <br />
      {props.productName} <br />
      {props.rating}
      {/* <div style={{'background': `linear-gradient(90deg, yellow ${ratingWidth}%, #FFF ${1 - ratingWidth}%)`, 'width': '80px'}}> */}
      {/* {stars} */}
      <div className={style.floated}>
        <img src="style/images/starslaced.png" alt="star" style={{
          left: `${ratingWidth}px`,
          // left: '-170px',
          width: 'auto',
          height: '16px',
          position: 'relative',
        }}/>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProductTitle;