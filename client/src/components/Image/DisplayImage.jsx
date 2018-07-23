import React, { Component } from 'react';
import ImageList from './ImageList';

const DisplayImage = (props) => {
  console.log('pic to display: ', props.displayedPicture)
  return (
    <div class="display-image">
      <ImageList />
      <img src={`https://loremflickr.com/320/240/${props.displayedPicture}`} class="displayed-pic" />
    </div>
  )
}

export default DisplayImage;