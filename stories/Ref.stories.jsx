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
  definitions: {
    person: {
      type: 'object',
      required: [
        'first_name',
        'last_name',
        'age'
      ],
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        },
        age: {
          type: 'integer'
        }
      }
    },
    football_team: {
      type: 'object',
      title: "Football Team",
      required: [
        'name',
        'league'
      ],
      properties: {
        name: {
          type: 'string',
          title: 'name',
        },
        league: {
          type: 'string',
          title: 'league',
        },
        year_founded: {
          type: 'integer',
          title: 'year_founded',
        }
      }
    }
  },
  type: 'object',
  required: [
    'current_club'
  ],
  properties: {
    current_club: {
      $ref: '#/definitions/football_team'
    }
  }
}

const RefForm = (props) => {
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

storiesOf('Ref', module)
  .add('with $ref error validate', () => <RefForm schema={schema} />)
