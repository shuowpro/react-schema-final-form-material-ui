import React, { Component } from 'react';
import BaseInputWidget from './BaseInputWidget.jsx';

const StringWidget = (props) => (
  <BaseInputWidget type='text' {...props} />
);

export default StringWidget;
