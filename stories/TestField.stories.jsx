import React from 'react';
import { Form, Field } from 'react-final-form';
import theme from '../src';
import { renderField, buildSyncValidation } from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import Button from 'material-ui/Button';


const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    vscs: {
      items: {
        properties: {
          ctrl_ip: {
            format: 'ipv4',
            title: 'Control IP address',
            type: 'string'
          },
          ctrl_netmask_prefix: {
            title: 'Control netmask prefix length',
            type: 'integer'
          },
          expected_num_bgp_peers: {
            default: 0,
            description: 'Used in postdeploy and health workflows as expected values if non-zero',
            title: 'Expected number BGP peers',
            type: 'integer'
          },
          expected_num_gateway_ports: {
            default: 0,
            description: 'Used in postdeploy and health workflows as expected values if non-zero',
            title: 'Expected number gateway ports',
            type: 'integer'
          },
          expected_num_host_vports: {
            default: 0,
            description: 'Used in postdeploy and health workflows as expected values if non-zero',
            title: 'Expected number host vports',
            type: 'integer'
          },
          expected_num_vm_vports: {
            default: 0,
            description: 'Used in postdeploy and health workflows as expected values if non-zero',
            title: 'Expected number VM vports',
            type: 'integer'
          },
          expected_num_vswitches: {
            default: 0,
            description: 'Used in postdeploy and health workflows as expected values if non-zero',
            title: 'Expected number vswitches',
            type: 'integer'
          },
          hostname: {
            format: 'hostname',
            title: 'Hostname',
            type: 'string'
          },
          mgmt_bridge: {
            default: '{{ mgmt_bridge }}',
            title: 'Bridge interface',
            type: 'string'
          },
          mgmt_gateway: {
            format: 'ipv4',
            title: 'Management IP gateway',
            type: 'string'
          },
          mgmt_ip: {
            format: 'ipv4',
            title: 'Management IP address',
            type: 'string'
          },
          mgmt_netmask_prefix: {
            title: 'Management IP prefix length',
            type: 'integer'
          },
          mgmt_static_route_list: {
            default: '[ 0.0.0.0/1, 128.0.0.1/1 ]',
            items: {
              format: 'ipv4',
              type: 'string'
            },
            title: 'Static route IP prefixes',
            type: 'array'
          },
          system_ip: {
            default: '0.0.0.0',
            description: 'Only required when IGP or BGP routing will be configured',
            format: 'ipv4',
            title: 'Routing IP address'
          },
          target_server: {
            format: 'hostname',
            title: 'Server hostname',
            type: 'string'
          },
          target_server_type: {
            enum: [
              'kvm',
              'vcenter',
              'heat'
            ],
            title: 'Server type',
            type: 'string'
          },
          vmname: {
            default: '{{ hostname }}',
            description: 'Used to identify VM on the hypervisor/vcenter.',
            format: 'hostname',
            title: 'VM name',
            type: 'string'
          },
          vsd_fqdn: {
            default: 'vsd1.{{ dns_domain }}',
            format: 'hostname',
            title: 'VSD fqdn',
            type: 'string'
          },
          xmpp_username: {
            default: 'vsc{{ vsc_index }}',
            title: 'XMPP username',
            type: 'string'
          }
        },
        required: [
          'hostname',
          'target_server_type',
          'target_server',
          'mgmt_ip',
          'mgmt_netmask_prefix',
          'mgmt_gateway',
          'ctrl_ip',
          'ctrl_netmask_prefix'
        ],
        type: 'object'
      },
      type: 'array'
    }
  }
}

const TestErrorFieldForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      validate={buildSyncValidation(schema)}
      validateOnBlur
    >
      {({ 
        handleSubmit,
        mutators,
        values,
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
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Form>
  )
}

storiesOf('Test Validation', module)
  .add('with test error valid', () => <TestErrorFieldForm schema={schema} />)
