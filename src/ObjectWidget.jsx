import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Paper from 'material-ui/Paper';
import FormGroup from 'material-ui/Form/FormGroup';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';
import FormHelperText from 'material-ui/Form/FormHelperText';
import { renderObjectProperties } from 'react-schema-final-form';
import _isString from 'lodash.isstring';

const withPaperContainer = CustomComponent =>
  class extends Component {
    render() {
      return (
        this.props.fieldName ?
        <Paper
          style={{
            padding: '20px',
          }}
        >
          <CustomComponent {...this.props} />
        </Paper> :
        <CustomComponent {...this.props} />
      );
    }
  }

const ObjectWidget = (props, context) => {
  const {
    schema,
    theme,
    fieldName,
    required
  } = props;
  return (
    <Field
      name={fieldName}
    >
      {({ meta: { error }}) => (
        <FormControl component="fieldset" required={required} fullWidth>
          {schema.title && <FormLabel component="legend">{schema.title}</FormLabel>}
          <FormGroup>
            {renderObjectProperties({
              schema,
              rootSchema: context.reactFinalSchemaForm.schema,
              theme,
              fieldName,
            })}
          </FormGroup>
          <FormHelperText>{_isString(error) ? error : undefined}</FormHelperText>
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
