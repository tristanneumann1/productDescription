import React, { Component } from 'react';
import style from '../../../dist/style/styles.css';

const DisplayImage = (props) => {
  console.log('pic to display: ', props.displayedPicture);
  return (
    <div className={style.displayImage}>
      <img src={`https://fakeimg.pl/640x480/?text=${props.displayedPicture}`} className={style.displayedPic} />
    </div>
  );
};

export default DisplayImage;