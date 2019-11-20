import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';

const pkg = require('./package.json');

process.env['NODE_ENV'] = 'production';
process.env['BABEL_ENV'] = 'production';

export default {
  input: `compiled/index.js`,
  output: [
    {file: pkg.main, name: 'index', format: 'umd'},
    {file: pkg.module, format: 'es'},
  ],
  sourcemap: true,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    'simpl-schema',
    'ttag',
    'js-quantities',
    'lodash',
  ],
  watch: {
    include: 'compiled/**',
  },
  plugins: [
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
      preferBuiltins: true
    }),

    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-destructuring",
        [
          'ttag',
          {
            'extract': {
              'output': 'dist/a11yjson.pot',
            },
          },
        ]
      ],
    }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),


    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
