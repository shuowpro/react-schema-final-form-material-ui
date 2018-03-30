import React from 'react';
import { Field } from 'react-final-form';
import FormControl from 'material-ui/Form/FormControl';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Switch from 'material-ui/Switch';

const SwitchWidget = props => {
  const {
    fieldName,
    schema,
  } = props;
  return (
    <Field
      name={fieldName}
      label={schema.title}
      type="checkbox"
    >
      {({
        input: { checked, name, onChange, ...restInput },
        meta: { touched, error },
        label,
        ...rest
      }) => {
        console.log(touched && error)
        return (
        <FormControl error={(!!touched) && (!!error)}>
          <FormControlLabel
            control={
              <Switch
                {...rest}
                name={name}
                inputProps={restInput}
                onChange={onChange}
                checked={!!checked}
                defaultChecked={!!schema.default}
              />
            }
            label={label}
          />
          <FormHelperText>{touched ? error : undefined}</FormHelperText>
        </FormControl>
      )}}
    </Field>
  )
}

export default SwitchWidget;
