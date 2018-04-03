import React from 'react';
import { Field } from 'react-final-form';
import TextField from 'material-ui/TextField';

const isString = value => typeof value === 'string' || value instanceof String;

const BaseInputWidget = props => {
  const {
    fieldName,
    schema,
    ...rest
  } = props;
  return (
    <Field
      name={fieldName}
      label={schema.title}
      placeholder={schema.default ? schema.default + '' : ''}
      {...rest}
    >
      {({
        input: { name, onChange, value, ...restInput },
        meta: { touched, error },
        ...rest
      }) => (
        <TextField
          {...rest}
          name={name}
          helperText={touched ? error : undefined}
          error={error && touched}
          inputProps={restInput}
          onChange={onChange}
          value={isString(value) ? value : ''}
        />
      )}
    </Field>
  )
}
export default BaseInputWidget;
