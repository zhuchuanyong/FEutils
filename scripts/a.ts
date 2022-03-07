#!/usr/bin/env zx
// import {$} from 'zx'
// let name = 'foo & bar'
// await $`mkdir ${name}`
import {$,os} from 'zx'

let platform=os.platform()
console.log('platform', platform) 
if(platform==='win32'){
  let aa=await $`where git`
}
const packages=['kit','other','storage','tree2arr']
const buildList=packages.map(item=>{
  return `pnpm build --filter @zcyutils/${item}` 
})
const buildStr=buildList.join(' && ')
// console.log('buildStr', buildStr)
// console.log('buildList', buildList)
// let a = await $`pnpm build --filter @zcyutils/tree2arr`
// await $`${buildStr}`;
// await $`pnpm build --filter @zcyutils/tree2arr`;

// await $` ${ a } `;
