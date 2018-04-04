import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { renderField } from 'react-schema-final-form';
import { FieldArray } from "react-final-form-arrays";
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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
    <div
      key={name}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}
    >
      <IconButton
        onClick={handleClickRemove(fields.remove, idx)}
      >
        <ClearIcon />
      </IconButton>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {renderField({
          schema: schema.items,
          fieldName: name,
          theme,
        })}
      </div>
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
    <Paper
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="title"
      >
        {schema.title}
      </Typography>
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
          meta: { touched, error },
        }) => (
          <FormControl>
            {renderArrayFields({
              fields,
              schema,
              theme,
              fieldName,
            })}
            <FormHelperText>{touched && !Array.isArray(error) ? error : undefined}</FormHelperText>
          </FormControl>
        )}
      </FieldArray>
      <Button
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
