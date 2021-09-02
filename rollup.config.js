
// import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
export default {
    input: 'index.js', // 入口
    output: [
      {  // 输出
        file: 'dist/bundle.cjs.js',  // 输出文件
        format: 'cjs', // nodejs  五种输出格式：amd /  es6 / iife / umd / cjs
        name:'lodash' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
      },
      {  // 输出
        file: 'dist/bundle.es.js',  // 输出文件
        format: 'es', //  五种输出格式：amd /  es6 / iife / umd / cjs
        name:'lodash' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
      },
      {  // 输出
        file: 'dist/bundle.iife.js',  // 输出文件
        format: 'iife', // nodejs  五种输出格式：amd /  es6 / iife / umd / cjs
        name:'lodash' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
      },
      {  // 输出
        file: 'dist/bundle.umd.js',  // 输出文件
        format: 'umd', //  浏览器 nodejs 五种输出格式：amd /  es6 / iife / umd / cjs
        name:'lodash' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(/*{ plugin options }*/),
      // babel({
      //   exclude: 'node_modules/**'
      // }),
      terser()
    ],
    external:['lodash-es']
  };