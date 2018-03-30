import React from 'react';
import BaseInputWidget from './BaseInputWidget.jsx';

const ipParser = value => 
  value.replace(/[^\d.:a-fA-F]/g, '');

const IpWidget = props => (
  <BaseInputWidget parse={ipParser} type="text" {...props} />
)

export default IpWidget;
