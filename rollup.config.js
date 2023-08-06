// import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

process.env.BABEL_ENV = 'es5'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: './dist/index.js',
        format: 'es'
      }, {
        file: './dist/index.cjs',
        format: 'cjs',
        exports: 'named',
        footer: 'module.exports = exports.default;'
      }],
    plugins: [
      // babel({
      //   exclude: 'node_modules/**'
      // })
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: './dist/index.min.js',
        format: 'es'
      }, {
        file: './dist/index.min.cjs',
        format: 'cjs',
        exports: 'named',
        footer: 'module.exports = exports.default;'
      }
    ],
    plugins: [
      // babel({
      //   exclude: 'node_modules/**'
      // }),
      terser()
    ]
  }
]
