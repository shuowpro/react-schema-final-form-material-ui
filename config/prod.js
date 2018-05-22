// Rollup plugins.
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import replace from 'rollup-plugin-replace'

// Import the development configuration.
import config from './dev';

// Inject the production settings.
config.plugins.push(replace({ 'process.env.NODE_ENV': JSON.stringify('production') }));
config.plugins.push(uglify({}, minify));

export default config;