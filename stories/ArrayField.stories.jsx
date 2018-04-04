import React from 'react';
import { Form, Field } from 'react-final-form';
import theme from '../src';
import { renderField } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from 'material-ui/Button';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          bar: {
            type: 'string',
            title: 'Bar',
          },
          gra: {
            type: 'string',
            title: 'Gra'
          }
        }
      }
    }
  }
}

const ArrayFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
    >
      {({ 
        handleSubmit,
        mutators,
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
        </form>
      )}
    </Form>
  )
}

storiesOf('ArrayField', module)
  .add('with array field', () => <ArrayFieldForm schema={schema} />)
