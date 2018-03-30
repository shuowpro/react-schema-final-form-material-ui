import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import { renderField } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      title: 'Title',
    }
  }
}

const InputFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {renderField({
            schema,
            theme,
          })}
        </form>
      )}
    </Form>
  )
}

storiesOf('InputField', module)
  .add('with input widget', () => <InputFieldForm schema={schema} />)
