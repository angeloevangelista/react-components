import ttypescript from 'ttypescript'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript2 from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    commonjs(),
    typescript2({
      typescript: ttypescript,
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            {
              "transform": "typescript-transform-paths"
            },
            {
              "transform": "typescript-transform-paths",
              "afterDeclarations": true
            }
          ]
        }
      }
    }),
    peerDepsExternal(),
    resolve(),
    postcss({
      plugins: []
    })
  ],
};
