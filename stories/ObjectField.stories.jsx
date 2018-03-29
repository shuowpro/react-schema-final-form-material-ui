import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import { renderField } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      title: 'Title',
    }
  }
}

const ObjectFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={(value) => window.alert(value)}
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

storiesOf('ObjectField', module)
  .add('with object widget', () => <ObjectFieldForm schema={schema} />)
