import React from 'react';
import { Field } from 'react-final-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const SelectWidget = props => {
  const {
    fieldName,
    schema,
    classes,
    required,
  } = props;
  return (
    <Field
      name={fieldName}
      label={schema.title}
    >
      {({
        input: { value, name, onChange, onFocus, ...restInput },
        meta: { touched, error },
        label,
        ...rest
      }) => {
        return (
        <FormControl
          className={classes.root}
          error={(!!touched) && (!!error)}
          required={required}
          fullWidth
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Select
            {...rest}
            id={name}
            name={name}
            value={value}
            displayEmpty
            onChange={onChange}
            onFocus={onFocus}
            inputProps={restInput}
          >
            {schema.enum.map(val => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
          {(!!touched && !!error) && <FormHelperText>{touched ? error : undefined}</FormHelperText>}
          {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
        </FormControl>
      )}}
    </Field>
  )
}

export default withStyles(styles)(SelectWidget);
