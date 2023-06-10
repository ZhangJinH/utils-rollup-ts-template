import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

function buildConfig(params) {
  const { entry = 'src/index.ts', format = 'cjs', sourcemap = false } = params;
  const filePrefix = format === 'cjs' ? 'lib' : 'es';
  let tsConfig = {};
  if (format === 'es') {
    tsConfig = {
      ...tsConfig,
      compilerOptions: {
        declaration: true,
        declarationDir: `${filePrefix}/dts`,
      },
    };
  } else {
    tsConfig = {
      compilerOptions: {
        target: 'es5',
      },
    };
  }
  return {
    input: entry,
    output: {
      file: `${filePrefix}/index.js`,
      format,
      sourcemap,
    },
    plugins: [
      typescript(tsConfig),
      commonjs(),
      resolve(),
      babel({
        babelrc: false,
        configFile: false,
        babelHelpers: 'bundled',
        plugins: ['@babel/preset-env'],
        exclude: ['node_modules'],
      }),
    ],
  };
}

function buildTypings() {
  return {
    input: 'es/dts/index.d.ts',
    output: {
      file: 'es/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts(),
      del({
        hook: 'buildEnd',
        targets: 'es/dts',
      }),
    ],
  };
}

export default [
  buildConfig({
    format: 'cjs',
  }),
  buildConfig({ format: 'es' }),
  buildTypings(),
];
