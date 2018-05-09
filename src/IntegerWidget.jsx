import React from 'react';
import BaseInputWidget from './BaseInputWidget.jsx';

const integerParser = value => {
  const num = parseInt(value, 10);
  return isNaN(num) ? undefined : num;
}

const IntegerWidget = (props) => (
  <BaseInputWidget type='number' parse={integerParser} {...props} />
);

export default IntegerWidget;
