import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { withSchema } from 'react-schema-final-form';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const SwitchWidget = props => {
  const {
    advanced,
    fieldName,
    schema,
    required,
    classes,
  } = props;
  return (
    (!advanced || !schema.advanced) &&
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
        return (
        <FormControl
          className={classes.root}
          error={(!!touched) && (!!error)}
          required={required}
          fullWidth
        >
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
          {(!!touched && !!error) && <FormHelperText>{touched ? error : undefined}</FormHelperText>}
          {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
        </FormControl>
      )}}
    </Field>
  )
};

export default withStyles(styles)(withSchema(SwitchWidget));
