import StringWidget from './StringWidget.jsx';
import ObjectWidget from './ObjectWidget.jsx';
import ArrayWidget from './ArrayWidget.jsx';
import SwitchWidget from './SwitchWidget.jsx';
import IpWidget from './IpWidget.jsx';
import SelectWidget from './SelectWidget.jsx';
import NumberWidget from './NumberWidget.jsx';

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
