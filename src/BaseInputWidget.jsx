import React from 'react';
import { Field } from 'react-final-form';
import TextField from 'material-ui/TextField';

const BaseInputWidget = props => (
  <Field
    name={props.fieldName}
  >
    {({
      input: { name, onChange, value, ...restInput },
      meta: { touched, error },
      ...rest
    }) => {
      console.log('name', name);
      return (
      <TextField
        {...rest}
        name={name}
        helperText={touched ? error : undefined}
        error={error && touched}
        inputProps={restInput}
        onChange={onChange}
        value={value}
      />
    )}}
  </Field>
)
export default BaseInputWidget;