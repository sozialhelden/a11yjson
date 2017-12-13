import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
import camelCase from 'lodash.camelcase';

const pkg = require('./package.json');

const libraryName = 'ac-format';

process.env['NODE_ENV'] = 'production';
process.env['BABEL_ENV'] = 'production';

export default {
  input: `compiled/${libraryName}.js`,
  output: [
    {file: pkg.main, name: camelCase(libraryName), format: 'umd'},
    {file: pkg.module, format: 'es'},
  ],
  sourcemap: true,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    'simpl-schema',
    'c-3po',
    'js-quantities',
    'lodash',
  ],
  watch: {
    include: 'compiled/**',
  },
  plugins: [
    babel({
      plugins: [
        [
          'c-3po',
          {
            'extract': {
              'output': 'dist/ac-format.pot',
            },
          },
        ],
      ],
    }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),


    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
