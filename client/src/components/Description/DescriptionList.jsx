import React, { Component } from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';

const DescriptionList = (props) => {
  let descriptionEntries;
  if (props.descriptions) {
    descriptionEntries = props.descriptions.map(description => {
      return <DescriptionEntry description={description}/>;
    });
  }
  return (
    <ul>
      {descriptionEntries}
    </ul>
  );
};

export default DescriptionList;