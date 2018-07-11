import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { renderObjectProperties, withSchema } from 'react-schema-final-form';
import _isString from 'lodash.isstring';
import withPaperContainer from './hoc/withPaperContainer.jsx';

const ObjectWidget = props => {
  const {
    rootSchema,
    schema,
    theme,
    fieldName,
    required,
    advanced,
  } = props;
  return (
    (!advanced || !schema.advanced) &&
    <FormControl
      component="fieldset"
      required={required}
      fullWidth
    >
      {schema.title && <FormLabel component="legend">{schema.title}</FormLabel>}
      <FormGroup>
        {renderObjectProperties({
          schema,
          rootSchema,
          theme,
          fieldName,
        })}
      </FormGroup>
      {schema.description && <FormHelperText error={false}>{schema.description}</FormHelperText>}
    </FormControl>
  );
};

ObjectWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
};

export default withPaperContainer(withSchema(ObjectWidget));
