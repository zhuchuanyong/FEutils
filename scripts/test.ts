#!/usr/bin/env zx

import {$,os} from 'zx'

const packages=['other','tree2arr','is']
for (let i = 0; i < packages.length; i++) {
  const item = packages[i];
  await $`pnpm test --filter @zcyutils/${item}`
}