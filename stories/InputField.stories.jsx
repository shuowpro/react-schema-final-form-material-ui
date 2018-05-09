import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import SchemaForm from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';


const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      title: 'Title',
      description: 'description',
    }
  },
  required: ['foo'],
}

const InputErrorForm = (props) => {
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
        validate={validate}
        validateOnBlur
      >
        {({ handleSubmit, values }) => (
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

storiesOf('Input', module)
  .add('with input error validate', () => <InputErrorForm schema={schema} />)
