import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { renderField } from 'react-schema-final-form';
import { FieldArray } from "react-final-form-arrays";

const handleClickRemove = (remove, idx) => () => {
  remove(idx);
}

const renderArrayFields = ({
  fields,
  schema,
  theme,
  fieldName,
}) => {
  return fields.map((name, idx) => 
    <div key={name}>
      <IconButton
        onClick={handleClickRemove(fields.remove, idx)}
      >
        <ClearIcon />
      </IconButton>
      {renderField({
        schema: schema.items,
        fieldName: name,
        theme,
      })}
    </div>
  )
};

const CollectionWidget = props => {
  const {
    fieldName,
    schema,
    theme,
    mutators,
  } = props;
  return (
    <Fragment>
      <FieldArray
        name={fieldName}
        fieldName={fieldName}
        schema={schema}
        theme={theme}
      >
        {({
          fields,
          schema,
          theme,
          fieldName,
        }) => (
          renderArrayFields({
            fields,
            schema,
            theme,
            fieldName,
          })
        )}
      </FieldArray>
      <Button
        variant="raised"
        color="primary"
        onClick={() => { mutators.push(fieldName, {}) }}
      >
        Add
      </Button>
    </Fragment>
  );
};

const ArrayWidget = (props) => {
  return CollectionWidget(props);
};

ArrayWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  context: PropTypes.object,
};

export default ArrayWidget;