import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/Main.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/lottery-logic.cjs.js'
    },
    {
      format: 'es',
      file: 'dist/lottery-logic.esm.js'
    }
  ],
  plugins: [
    terser(),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/lodash/lodash.js': ['cloneDeep']
      }
    })
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
    console.warn(warning.message)
  }
}
