import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    name: 'reachsteal',
    plugins: [
        resolve({
            browser: true
        }),
        commonjs(),
        json({
            include: ['data/*']
        }),
        babel() // babel goes to last to let rollup do its thing before ES6 -> ES5
    ]
};
