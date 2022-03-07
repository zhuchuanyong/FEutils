#!/usr/bin/env zx

import {$,os} from 'zx'

const packages=['kit','other','storage','tree2arr']
for (let i = 0; i < packages.length; i++) {
  const item = packages[i];
  await $`pnpm build --filter @zcyutils/${item}`
}