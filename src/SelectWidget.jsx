import React from 'react';
import { Field } from 'react-final-form';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

const SelectWidget = props => {
  const {
    fieldName,
    schema,
    required,
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
        <FormControl error={(!!touched) && (!!error)} required={required} fullWidth>
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
