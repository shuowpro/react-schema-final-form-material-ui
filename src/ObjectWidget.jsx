import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderObjectProperties } from 'react-schema-final-form';

const ObjectWidget = props => {
  const {
    schema,
    theme,
    mutators,
    fieldName,
  } = props;
  return (
    <Fragment>
      {renderObjectProperties({
        schema,
        theme,
        mutators,
        fieldName,
      })}
    </Fragment>
  );
};

ObjectWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
};

export default ObjectWidget;
