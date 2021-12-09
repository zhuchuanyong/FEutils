import type { ID, Exporter } from '../type'
import type { ParseResult } from './parse'
import { ROOT_ID } from './constants'
export function exporter<T>(result: ParseResult<T>): T[] {
  const nodes = result.childNodes
  return nodes?.[ROOT_ID] ?? []
}
