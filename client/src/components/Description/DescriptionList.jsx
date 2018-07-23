import React, { Component } from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';

const DescriptionList = (props) => {
  return (
    <div>Hi From DescriptionList
      {props.descriptions}
      <DescriptionEntry />
    </div>
  )
}

export default DescriptionList;