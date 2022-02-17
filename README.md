
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
* Function
* String
* Number
* TypeOf
* validator
* Web Api
* * url
  * base64
  * blobToDataURL 将 file、blob、stream 格式 转 DateURL
  * dataURLtoBlob 将图片的 dataURL 转为 Blob 格式
  * getImgToBase64 将图片的 url 转为 base64 格式
  * getImgToBlob 将图片的 url 转为 Blob 格式
  * downloadFile 在客户端触发文件下载
  * setClipboardData 将文本数据放置在剪贴板上

## 其他utils 库
* [utils](https://github.com/cd-dongzi/utils)
* [xe-utils](https://github.com/x-extends/xe-utils)
* [MyUtils](https://github.com/XmanLin/MyUtils)
* [outils](https://github.com/proYang/outils) *
* [hey-utils](https://github.com/heyui/hey-utils)
* [utilscore](https://github.com/cgxqd/utilscore)
* [Utils](https://github.com/dragonir/Utils.js)
* [flten-utils](https://github.com/fltenwall/flten-utils)
* [es6-utils](https://github.com/leeenx/es6-utils)
* [cmn-utils](https://github.com/LANIF-UI/cmn-utils)
* [cloud-utils](https://github.com/cloud-templates/cloud-utils) *
* [jutils](https://github.com/dong-sir/jutils)
* [js-utils](https://github.com/weijhfly/js-utils)
* [utils](https://github.com/lioojc/utils)
* [leizm-utils](https://github.com/leizongmin/leizm-utils)
* [Utils](https://github.com/LyuHaiLoong/Utils)
* [utils](https://github.com/Aomd/utils)
* [happy-utils](https://github.com/cilla123/happy-utils)
* [lao-utils](https://github.com/giscafer/lao-utils)
* [sparrow-utils](https://github.com/hanguangbaihuo/sparrow-utils)
* [js-utils](https://github.com/georapbox/js-utils) *
* [jPublic](https://github.com/smltq/jPublic) *
* [e-utils](https://github.com/E-Utils/e-utils)
* [usuallyjs](https://github.com/JofunLiang/usuallyjs) *
* [CommonFrontUtils](https://github.com/YumeiSoft/CommonFrontUtils) *
* [fe-utils](https://github.com/zhangyunling/fe-utils)
* [liuli-utils](https://github.com/rxliuli/liuli-utils) *
* [utils](https://github.com/pansyjs/utils) *
* [dt-utils](https://github.com/DTStack/dt-utils) *
* [mUtils](https://github.com/Alie-z/mUtils)
* [cnchar](https://github.com/theajack/cnchar) 汉字相关
* [utils](https://github.com/wenzi0github/utils)
* [d-utils](https://github.com/IFmiss/d-utils)
* [vtils](https://github.com/fjc0k/vtils) *
* [utils](https://github.com/planjs/utils) *
* [onex-utils](https://github.com/unity-template/onex-utils) *
* [utils-la](https://github.com/lanzhsh/react-vue-koa/tree/master/utils-lan) 
* [jcommon](https://github.com/wxingheng/jcommon) 
* [always-helpe](https://github.com/Rabbitzzc/always-helper) *





