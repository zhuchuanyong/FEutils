#!/usr/bin/env zx

import {$,os} from 'zx'

import { resolve } from "path";
console.log('resolve   : ' + resolve('./'))
const packages=['other','tree2arr','is']
for (let i = 0; i < packages.length; i++) {
  const item = packages[i];
  console.log('item', item)
  await $`pnpm test --filter @zcyutils/${item}`
}