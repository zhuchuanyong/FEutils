import { ParseResult } from './common/parse'

/**
 * ID 类型
 */
export type ID = string | number

/**
 * 空数据
 */
export type None = null | undefined

/**
 * 普通对象
 * key为字符串或数字  值为unknown
 * unknown与any 相似 但比any更加严格
 * @public
 */
export type Row = Record<string | number, unknown>

/**
 * 默认的节点对象
 * 继承Row 因为节点还有其他未知自定义字段
 */
export interface Node extends Row {
  id: ID
  parentId: ID
  children: Node
}

/**
 * 数据导出
 */
export type Export<T> = (
  nodes: Record<ID, T[]>,
  result: ParseResult<T>,
) => T[] | null | undefined

/**
 * 节点转换
 */
export type Transform<T, S> = (data: T, index: number) => S | None
