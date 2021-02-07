
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
export default {
    input: 'src/main.js', // 入口
    output: {  // 输出
      file: 'dist/bundle.cjs.js',  // 输出文件
      format: 'cjs', //  五种输出格式：amd /  es6 / iife / umd / cjs
      name:'lodash' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ],
    external:['lodash-es']
  };