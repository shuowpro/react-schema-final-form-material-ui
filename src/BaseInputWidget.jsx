import React from 'react';
import { Field } from 'react-final-form';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Input, { InputLabel } from 'material-ui/Input';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const BaseInputWidget = props => {
  const {
    fieldName,
    schema,
    classes,
    required,
    type,
    ...rest
  } = props;
  return (
    <Field
      name={fieldName}
      label={schema.title}
      {...rest}
    >
      {({
        input: { name, ...restInput },
        meta: { touched, error },
      }) => (
        <FormControl
          className={classes.root}
          error={!!touched && !!error}
          required={required}
          fullWidth
        >
          {schema.title && <InputLabel htmlFor={name}>{schema.title}</InputLabel>}
          <Input id={fieldName} type={type} placeholder={schema.default ? schema.default + '' : ''} {...restInput} />
          {(!!touched && !!error) && <FormHelperText>{touched ? error : undefined}</FormHelperText>}
          {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
        </FormControl>
      )}
    </Field>
  )
}

export default withStyles(styles)(BaseInputWidget);
