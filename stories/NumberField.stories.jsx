import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import renderSchema, { buildSyncValidation } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';

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

const NumberFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      validate={buildSyncValidation(schema)}
      validateOnBlur
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {renderSchema({
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

storiesOf('NumberField', module)
  .add('with number widget', () => <NumberFieldForm schema={schema} />)
  .add('with number widget with default value', () => <NumberFieldForm schema={schemaWithDefault} />)
