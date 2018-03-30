import React from 'react';
import { Field } from 'react-final-form';
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const SelectWidget = props => {
  const {
    fieldName,
    schema,
  } = props;
  return (
    <Field
      name={fieldName}
      label={schema.title}
    >
      {({
        input: { value, name, onChange, ...restInput },
        meta: { touched, error },
        label,
        ...rest
      }) => {
        return (
        <FormControl error={(!!touched) && (!!error)}>
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Select
            {...rest}
            name={name}
            value={value}
            displayEmpty
            onChange={onChange}
            input={<Input id={name} {...restInput} />}
          >
            {schema.enum.map(value => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{touched ? error : undefined}</FormHelperText>
        </FormControl>
      )}}
    </Field>
  )
}

export default SelectWidget;
