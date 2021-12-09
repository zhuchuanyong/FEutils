export { default as chunk } from './Array/chunk/index'
export { default as compact } from './Array/compact/index'
export { default as difference } from './Array/difference/index'
export { default as intersection } from './Array/intersection/index'
export { default as debounce } from './fn/debounce'
export { default as throttle } from './fn/throttle'
import { parse } from './fn/arrayTree/index'

const arr = [
  { id: 1, parentId: null },
  { id: 2, parentId: null },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 1 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 4 },
]
const a = parse(arr)
console.log(`a`, a)
// toTree(arr)
