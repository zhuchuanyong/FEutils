
# 浏览器storage 方法简单封装

## ✨ 特性
- 🚀 快速，使用简单
- 📦 基于 esbuild 进行打包，提供`cjs`、`es`、`umd`三种格式
- 💻 使用 TypeScript 构建，提供完整的类型定义文件

## 🏗 安装

```shell
$ npm i @zcytools/utils
$ yarn add @zcytools/utils
$ pnpm add @zcytools/utils
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

## todo

* 设置过期时间
  * 把过期时间储存,取值判断是否过期， 缺点是改动本地设备时间，过期时间会不正确
* 数据加密
  * cookie储存key设置过期时间 localstorage 储存值
