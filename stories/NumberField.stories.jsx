import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import SchemaForm from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'integer',
      title: 'Title',
    }
  },
  required: ['foo'],
}

const schemaWithDefault = {
  type: 'object',
  properties: {
    foo: {
      type: 'integer',
      default: 8500,
      title: 'Title',
    }
  },
  required: ['foo'],
}

const NumberForm = (props) => {
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

storiesOf('Number', module)
  .add('with number error validate', () => <NumberForm schema={schema} />)
  .add('with number error validate and default value', () => <NumberForm schema={schemaWithDefault} />)
