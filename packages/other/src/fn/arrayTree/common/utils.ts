import type { ID, Exporter } from '../type'
import type { ParseResult } from './parse'
import { ROOT_ID } from './constants'
export function exporter<T>(
  result: ParseResult<T>,
  root?: ID | Exporter<T>,
): T[] {
  const nodes = result.childNodes

  // 根节点支持配置
  // 如果根节点是函数 就返回函数结果
  if (typeof root === 'function') {
    return root(nodes, result) || []
  }

  // 返回数据
  const key = root ?? ROOT_ID
  return nodes[key] ?? []
}
