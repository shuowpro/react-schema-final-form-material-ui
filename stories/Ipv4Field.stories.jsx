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
      title: 'IP',
      format: 'ipv4',
    }
  },
  required: ['foo'],
}

const Ipv4FieldForm = (props) => {
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

storiesOf('IP Field', module)
  .add('with ipv4 widget', () => <Ipv4FieldForm schema={schema} />)
