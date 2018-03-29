import React from 'react';
import { Form, Field } from 'react-final-form';
import theme from '../src';
import { renderField } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      title: 'Title',
    }
  }
}

const TextFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={(value) => console.log(value)}
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

storiesOf('TextField', module)
  .add('with textField', () => <TextFieldForm schema={schema} />)
