import StringWidget from './StringWidget';
import ObjectWidget from './ObjectWidget';
import ArrayWidget from './ArrayWidget';
import SwitchWidget from './SwitchWidget';
import IpWidget from './IpWidget';
import SelectWidget from './SelectWidget';
import NumberWidget from './NumberWidget';

const theme = {
  'string': StringWidget,
  'object': ObjectWidget,
  'array': ArrayWidget,
  'boolean': SwitchWidget,
  'ipv4': IpWidget,
  'ipv6': IpWidget,
  'ip': IpWidget,
  'choice': SelectWidget,
  'integer': NumberWidget,
}

export default theme;
