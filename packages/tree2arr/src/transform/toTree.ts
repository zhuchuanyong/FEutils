import type { ID, Row, Node, Exporter } from '../type'

import { exporter } from '../common/utils'
import { parse, ParseOptions } from '../common/parse'
/**
 * 
 * @param data 数据
 * @param options  配置项
 * @returns 
 */
export function toTree<S = Node, T extends Row = Row>(
  data: T[],
  options: any = {},
): S[] {
  return exporter(parse(data, options), options.root)
}
