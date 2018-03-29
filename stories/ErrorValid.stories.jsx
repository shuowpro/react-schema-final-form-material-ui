import React from 'react';
import { Form, Field } from 'react-final-form';
import theme from '../src';
import { renderField, buildSyncValidation } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from 'material-ui/Button';
import Ajv from 'ajv';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  $schema: 'http://json-schema.org/draft-06/schema#',
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      title: 'Foo',
    },
    bar: {
      type: 'string',
      title: 'Bar',
    },
  },
  required: ['foo', 'bar'],
}

const ErrorFieldForm = (props) => {
  const ajv = new Ajv({
    allErrors: true,
    errorDataPath: 'property',
  });
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      validate={buildSyncValidation(schema, ajv)}
      validateOnBlur
    >
      {({ 
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          {renderField({
            schema,
            theme,
          })}
          <Button
            variant="raised"
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Form>
  )
}

storiesOf('Error Validation', module)
  .add('with error valid', () => <ErrorFieldForm schema={schema} />)
