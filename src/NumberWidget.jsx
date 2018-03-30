import React from 'react';
import BaseInputWidget from './BaseInputWidget.jsx';

const numberParser = value =>
  parseInt(value, 10) || '';

const StringWidget = (props) => (
  <BaseInputWidget type='number' parse={numberParser} {...props} />
);

export default StringWidget;
