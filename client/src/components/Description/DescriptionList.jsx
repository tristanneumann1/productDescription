import React, { Component } from 'react';
import DescriptionEntry from './DescriptionEntry.jsx';
import style from '../../style/styles.css';

const DescriptionList = (props) => {
  let descriptionEntries;
  if (props.descriptions) {
    descriptionEntries = props.descriptions.map((description, i) => {
      return <DescriptionEntry key={i} description={description}/>;
    });
  }
  return (
    <ul className={style.descriptionList}>
      {descriptionEntries}
    </ul>
  );
};
export default DescriptionList;