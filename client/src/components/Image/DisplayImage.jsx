import React, { Component } from 'react';

const DisplayImage = (props) => {
  console.log('pic to display: ', props.displayedPicture)
  return (
    <div class="display-image">
      <img src={`https://fakeimg.pl/320x240/?text=${props.displayedPicture}`} class="displayed-pic" />
    </div>
  )
}

export default DisplayImage;