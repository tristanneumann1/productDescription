import React, { Component } from 'react';

const ImageList = (props) => {
  let imageList = <img src={`https://fakeimg.pl/37x37/`} />;
  if(props.pictures) {
    imageList = props.pictures.map(picture => {
      console.log('addng pics', picture)
      return <img src={`https://fakeimg.pl/37x37/?text=${picture.slice(0, -6)}`} class="image-entry" />
    });
  }
  return (
    <div class="image-list">
      {imageList}
    </div>
  )
}

export default ImageList;