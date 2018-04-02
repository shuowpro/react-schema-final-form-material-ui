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
      type: 'boolean',
      title: 'Title',
    }
  },
  required: ['foo'],
}

const SwitchFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      validate={buildSyncValidation(schema)}
      validateOnBlur
    >
      {({ handleSubmit, values }) => (
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
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Form>
  )
}

storiesOf('SwitchField', module)
  .add('with switch widget', () => <SwitchFieldForm schema={schema} />)
