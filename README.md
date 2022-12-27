
# 小巧实用的前端工具类库

[![GitHub issues](https://img.shields.io/github/issues/zhuchuanyong/FEutils)](https://github.com/zhuchuanyong/FEutils/issues)
[![GitHub forks](https://img.shields.io/github/forks/zhuchuanyong/FEutils)](https://github.com/zhuchuanyong/FEutils/network)
[![GitHub stars](https://img.shields.io/github/stars/zhuchuanyong/FEutils)](https://github.com/zhuchuanyong/FEutils/stargazers)
[![GitHub license](https://img.shields.io/github/license/zhuchuanyong/FEutils)](https://github.com/zhuchuanyong/FEutils)

## ✨ 特性
- 🚀 快速，使用简单,可单独安装独立功能包
- 📦 基于 esbuild 进行打包，提供`cjs`、`es`、`umd`三种格式
- 💻 使用 TypeScript 构建，提供完整的类型定义文件

## 🏗 安装

```shell
$ npm i @zcytools/kit
$ yarn add @zcytools/kit
$ pnpm add @zcytools/kit
or 也可独立安装独立的功能包
$ npm i @zcytools/storage
```
## 🔨 使用

* 浏览器:

```html
<script src="iife/index.js"></script>
```

* ES6/TS

```ts
import { xx } from '@zcytools/utils';
// or 只引入需要使用的包
import { xx } from '@zcytools/storage';
```
## tips

> tsup 会把devDependencies 中代码用到的依赖打进包里 如lodash  放到dependencies 就不会打进包里了
> https://tsup.egoist.sh/#excluding-packages
## todo

* typedoc 生成文档

### utils 分类

* Object
* Array 
* Date
  * getMonthOfDay  获取某月有多少天
  * getYearOfDay  获取某年有多少天
  * getDayOfYear  获取某个日期是当年中的第几天
  * getDayOfYearWeek   获取某个日期在这一年的第几周
* Function
* String
* Number
  * 将阿拉伯数字翻译成中文的大写数字
  * 将数字转换为大写金额 
* TypeOf
* validator
* Web Api
  * url
  * base64
  * blobToDataURL 将 file、blob、stream 格式 转 DateURL
  * dataURLtoBlob 将图片的 dataURL 转为 Blob 格式
  * getImgToBase64 将图片的 url 转为 base64 格式
  * getImgToBlob 将图片的 url 转为 Blob 格式
  * downloadFile 在客户端触发文件下载
  * setClipboardData 将文本数据放置在剪贴板上
  * DOM
  * style 样式
  * 





