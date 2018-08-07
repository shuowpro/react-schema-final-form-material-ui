import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import SchemaForm from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from '@material-ui/core/Button';


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
      title: 'arrs',
    },
  },
  required: ['arrs'],
}

const ArrayErrorForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <SchemaForm
      schema={schema}
      theme={theme}
    >
      {({ RenderedFields, validate }) => (
        <Form
          onSubmit={onSubmit}
          mutators={{
            ...arrayMutators
          }}
          validate={validate}
          validateOnBlur
        >
          {({ handleSubmit, mutators, values }) => (
            <form onSubmit={handleSubmit}>
              <RenderedFields />
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
      )}
    </SchemaForm>
  )
}

storiesOf('Array', module)
  .add('with array error validate', () => <ArrayErrorForm schema={schema} />)
