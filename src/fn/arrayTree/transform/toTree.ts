import type { ID, Row, Node, Exporter } from '../type'

import { exporter } from '../common/utils'
import { parse, ParseOptions } from '../common/parse'
export function toTree<S = Node, T extends Row = Row>(
  data: T[],
  options: any = {},
): S[] {
  return exporter(parse(data, options), options.root)
}
