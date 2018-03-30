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
      type: 'string',
      enum: ['human', 'alien'],
      title: 'Title',
    }
  },
  required: ['foo'],
}

const SelectFieldForm = (props) => {
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

storiesOf('SelectField', module)
  .add('with select widget', () => <SelectFieldForm schema={schema} />)
