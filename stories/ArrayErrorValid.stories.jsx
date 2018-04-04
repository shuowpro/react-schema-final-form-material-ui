import React from 'react';
import { Form, Field } from 'react-final-form';
import theme from '../src';
import { renderField, buildSyncValidation } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from 'material-ui/Button';


const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  $schema: 'http://json-schema.org/draft-06/schema#',
  type: 'object',
  properties: {
    arrs: {
      type: 'array',
      items: {
        type: 'string',
        title: 'Foo',
      },
    }
  },
  required: ['arrs'],
}

const ArrayErrorFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      validate={buildSyncValidation(schema)}
      validateOnBlur
    >
      {({ 
        handleSubmit,
        mutators,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          {renderField({
            schema,
            theme,
            mutators,
          })}
          <Button
            variant="raised"
            type="submit"
          >
            Submit
          </Button>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Form>
  )
}

storiesOf('Error Validation', module)
  .add('with array error valid', () => <ArrayErrorFieldForm schema={schema} />)
