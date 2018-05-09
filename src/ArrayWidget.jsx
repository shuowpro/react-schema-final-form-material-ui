import * as React from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { renderField } from 'react-schema-final-form';
import { FieldArray } from "react-final-form-arrays";
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormLabel from 'material-ui/Form/FormLabel';
import FormGroup from 'material-ui/Form/FormGroup';
import Paper from 'material-ui/Paper';
import _isString from 'lodash.isstring';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  element: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const handleClickRemove = (remove, idx) => () => {
  remove(idx);
}

const ArrayWidget = (props, context) => {
  const {
    fieldName,
    schema,
    theme,
    required,
    classes,
  } = props;
  const {
    reactFinalForm: { mutators },
  } = context;
  return (
    <FieldArray
      name={fieldName}
      fieldName={fieldName}
      schema={schema}
    >
      {({
        fields,
        schema,
        fieldName,
        meta: { error },
      }) => (
      <Paper
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
          <FormControl
            className={classes.root}
            component="fieldset"
            error={_isString(error)}
            required={required} 
            fullWidth
          >
            <FormGroup>
              {schema.title && <FormLabel component="legend" className={classes.element}>{schema.title}</FormLabel>}
              {fields.map((name, idx) => 
                <FormGroup
                  key={name}
                >
                  <IconButton
                    onClick={handleClickRemove(fields.remove, idx)}
                    style={{
                      alignSelf: 'flex-end',
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                  {renderField({
                    schema: schema.items,
                    fieldName: name,
                    theme,
                  })}
                </FormGroup>
              )}
              {_isString(error) && <FormHelperText>{_isString(error) ? error : undefined}</FormHelperText>}
              {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
            </FormGroup>
          </FormControl>
        <Button
          className={classes.element}
          variant="raised"
          color="primary"
          onClick={() => { mutators.push(fieldName, schema.items && schema.items.type === 'object' ? {} : undefined) }}
          style={{
            alignSelf: 'flex-start',
          }}
        >
          Add
        </Button>
      </Paper>
      )}
    </FieldArray>
  );
}

ArrayWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
}

ArrayWidget.contextTypes = {
  reactFinalForm: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArrayWidget);
