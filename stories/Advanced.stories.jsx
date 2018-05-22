import React, { Component, Fragment } from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import SchemaForm from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  $schema: 'http://json-schema.org/draft-06/schema#',
  type: 'object',
  properties: {
    stringAdv: {
      type: 'string',
      title: 'string is advanced',
      advanced: 'true',
    },
    string: {
      type: 'string',
      title: 'string is not advanced',
    },
    selectAdv: {
      type: 'string',
      title: 'select is advanced',
      enum: ['human', 'alien'],
      advanced: 'true',
    },
    select: {
      type: 'string',
      enum: ['human', 'alien'],
      title: 'select is not advanced',
    },
    booleanAdv: {
      type: 'boolean',
      title: 'boolean is advanced',
      advanced: 'true',
    },
    boolean: {
      type: 'boolean',
      title: 'boolean is not advanced',
    },
    objectAdv: {
      type: 'object',
      title: 'object is advanced',
      properties: {
        foo: {
          type: 'string',
          title: 'foo'
        },
      },
      advanced: 'true',
    },
    object: {
      type: 'object',
      title: 'object is not advanced',
      properties: {
        foo: {
          type: 'string',
          title: 'foo'
        },
      },
    },
    arrayAdv: {
      type: 'array',
      title: 'array is advanced',
      items: {
        type: 'string',
        title: 'foo'
      },
      advanced: 'true',
    },
    array: {
      type: 'array',
      title: 'array is not advanced',
      items: {
        type: 'string',
        title: 'foo'
      },
    },
  },
}

class AdvancedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advanced: false,
    }
  }

  handleAdvance = () => {
    this.setState({
      advanced: !this.state.advanced
    });
  }

  render() {
    const {
      schema,
    } = this.props;
    const {
      advanced,
    } = this.state;
    return (
      <Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={advanced}
              onChange={this.handleAdvance}
            />
            }
          label="Advanced"
        />
        <SchemaForm
          schema={schema}
          theme={theme}
          advanced={advanced}
        >
          {({ RenderedFields, validate }) => (
            <Form
              onSubmit={onSubmit}
              mutators={{
                ...arrayMutators
              }}
              validate={validate}
              validateOnBlur
            >
              {({ handleSubmit, mutators, values }) => (
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
      </Fragment>
    )
  }
}


storiesOf('Advanced', module)
  .add('with advanced', () => <AdvancedForm schema={schema} />)
