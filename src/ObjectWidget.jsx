import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FormGroup from 'material-ui/Form/FormGroup';
import { renderObjectProperties } from 'react-schema-final-form';

const withPaperContainer = CustomComponent =>
  class extends Component {
    render() {
      return (
        this.props.fieldName ?
        <Paper
          style={{
            margin: '20px 0',
          }}
        >
          <CustomComponent {...this.props} />
        </Paper> :
        <CustomComponent {...this.props} />
      );
    }
  }

const ObjectWidget = props => {
  const {
    schema,
    theme,
    mutators,
    fieldName,
  } = props;
  return (
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
  );
};

ObjectWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
};

export default withPaperContainer(ObjectWidget);
