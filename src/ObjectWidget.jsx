import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { renderObjectProperties } from 'react-schema-final-form';
import _isString from 'lodash.isstring';
import withPaperContainer from './hoc/withPaperContainer.jsx';

const ObjectWidget = (props, context) => {
  const {
    schema,
    theme,
    fieldName,
    required,
  } = props;
  return (
    <Field
      name={fieldName}
    >
      {({ meta: { error }}) => (
        <FormControl
          component="fieldset"
          error={_isString(error)}
          required={required}
          fullWidth
        >
          {schema.title && <FormLabel component="legend">{schema.title}</FormLabel>}
          <FormGroup>
            {renderObjectProperties({
              schema,
              rootSchema: context.reactFinalSchemaForm.schema,
              theme,
              fieldName,
            })}
          </FormGroup>
          {_isString(error) && <FormHelperText>{(_isString(error) ? error : undefined) || schema.description}</FormHelperText>}
          {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
        </FormControl>
      )}
    </Field>
  );
};

ObjectWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
};

ObjectWidget.contextTypes = {
  reactFinalSchemaForm: PropTypes.object,
};

export default withPaperContainer(ObjectWidget);
