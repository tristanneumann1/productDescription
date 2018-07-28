import React, { Component } from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';

const DescriptionList = (props) => {
  let descriptionEntries;
  if (props.descriptions) {
    descriptionEntries = props.descriptions.map((description, i) => {
      return <DescriptionEntry key={i} description={description}/>;
    });
  }
  return (
    <ul>
      {descriptionEntries}
    </ul>
  );
};

export default DescriptionList;