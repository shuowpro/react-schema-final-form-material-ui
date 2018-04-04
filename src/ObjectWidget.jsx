import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FormGroup from 'material-ui/Form/FormGroup';
import { renderObjectProperties } from 'react-schema-final-form';


const ObjectWidget = props => {
  const {
    schema,
    theme,
    mutators,
    fieldName,
  } = props;
  return (
    <Paper
      style={{
        margin: '20px 0',
      }}
    >
      <FormGroup
        style={{
          padding: '20px',
        }}
      >
        {renderObjectProperties({
          schema,
          theme,
          mutators,
          fieldName,
        })}
      </FormGroup>
    </Paper>
  );
};

ObjectWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
};

export default ObjectWidget;
