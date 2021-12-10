import { ID, Node, Row } from '../type'
import { CHILDREN_KEY, ID_KEY, PARENT_ID_KEY, ROOT_ID } from './constants'
import { isEmpty, isNil } from 'lodash'

/**
 * options 配置项类型
 */
export type ParseOptions<T, S> = {
  idkey?: string //id属性名
  parentKey?: string //parentId 的属性名
  childrenKey?: string //支持自定义 children 的属性名
  // transform?:Transform<T,S> // 允许外部转换数据
  insert?: () => void // 允许外部接管插入行为
}

export type ParseResult<S> = {
  idKey: string //id 的属性名
  parentKey: string //parentId 的属性名
  childrenKey: string //支持自定义 children 的属性名
  nodes: Record<ID, S> // 包含所有节点的对象
  childNodes: Record<ID, S[]> //包含所有节点关系的对象 key是id v是子节点列表
}

/**
 *
 * @param data 行数据
 * @param options 配置项
 */
export function parse<S = Node, T extends Row = Row>(
  data: T[],
  options: ParseOptions<T, S> = {},
): ParseResult<S> {
  // 获取配置项 key
  const idKey = options.idkey ?? ID_KEY
  const parentKey = options.parentKey ?? PARENT_ID_KEY
  const childrenKey = options.childrenKey ?? CHILDREN_KEY
  const nodes: Record<ID, S> = {} //包含所有节点的对象  k是id  值是节点数据
  const childNodes: Record<ID, S[]> = {} //包含所有节点关系的对象 key是id v是子节点列表
  const insert =
    options?.insert ?? ((siblings: S[], node: S) => siblings.push(node))

  data.forEach((item, i) => {
    const node: any = item
    // 获取节点ID
    const id = item?.[idKey] as ID // 去掉as 下一行 childNodes?.[id] 编辑器会爆红
    const children = childNodes?.[id] ?? [] // 从子节点列表中 获取子节点数据

    // 设置当前节点的子节点数据
    if (isEmpty(children)) {
      childNodes[id] = (node as Row)[childrenKey] = []
    } else {
      node[childrenKey] = children
    }

    // 获取父节点
    const parentId = (node?.[parentKey] ?? ROOT_ID) as ID

    // 获取同级元素(父节点的子节点列表)childNodes?.[parentId]
    // 通过父id 获取子节点列表  子节点列表就是当前节点的同级元素
    // 子节点列表不存在就设置为空数组
    // 把当前节点加入到子节点列表
    // childNodes[id] childNodes[root] 存在引用类型
    if (isNil(childNodes[parentId])) {
      childNodes[parentId] = []
    }
    insert(childNodes[parentId], node)

    // 为了方便外部根据ID获取节点信息
    nodes[id] = node
  })

  return {
    idKey,
    parentKey,
    childrenKey,
    nodes,
    childNodes,
  }
}
// function getId() {}
