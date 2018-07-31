import React, { Component } from 'react';
import style from '../../style/styles.css';

const ImageList = (props) => {
  let imageList = <img src={'https://fakeimg.pl/37x37/'} />;
  if (props.pictures) {
    imageList = props.pictures.map(picture => {
      let className = (props.displayedPicture === picture) ? style.imageEntryDisplayed : style.imageEntry;
      return <img
        src={`https://fakeimg.pl/37x37/?text=${picture}`}
        className={className}
        onMouseOver={()=>{ props.handleChangeDisplay(picture); }}
      />;
    });
  }
  return (
    <div className={style.imageList}>
      {imageList}
    </div>
  );
};

export default ImageList;