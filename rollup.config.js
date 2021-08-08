import typescript from 'rollup-plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            name: 'sick',
            file: packageJson.browser,
            format: 'umd',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**',
        }),
        cleaner({
            targets: ['./build'],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
        }),
    ],
};
