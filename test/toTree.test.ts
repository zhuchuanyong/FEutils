import { toTree } from '@lib/index'
import { deepStrictEqual } from 'assert'

describe('transform/toTree.js', function () {
  it('测试基本 toTree()', function () {
    const result = toTree([
      { id: 1, parentId: null },
      { id: 2, parentId: null },
      { id: 3, parentId: 1 },
    ])

    const expected = [
      {
        id: 1,
        parentId: null,
        children: [{ id: 3, parentId: 1, children: [] }],
      },
      { id: 2, parentId: null, children: [] },
    ]

    deepStrictEqual(result, expected)
  })

  it('测试自定义根节点 toTree(root = 0)', function () {
    const result = toTree(
      [
        { id: 1, parentId: 0 },
        { id: 2, parentId: 0 },
        { id: 3, parentId: 1 },
      ],
      { root: 0 },
    )

    const expected = [
      { id: 1, parentId: 0, children: [{ id: 3, parentId: 1, children: [] }] },
      { id: 2, parentId: 0, children: [] },
    ]

    deepStrictEqual(result, expected)
  })

  it('测试函数自定义根节点 toTree(root = fn)', function () {
    const result = toTree(
      [
        { id: 1, parentId: 0 },
        { id: 2, parentId: 0 },
        { id: 3, parentId: 1 },
      ],
      { root: (nodes) => nodes[1] || [] },
    )

    const expected = [{ id: 3, parentId: 1, children: [] }]

    deepStrictEqual(result, expected)
  })

  it('测试自定义id toTree(idKey=sub)', function () {
    const result = toTree(
      [
        { sub: 1, parentId: null },
        { sub: 2, parentId: null },
        { sub: 3, parentId: 1 },
      ],
      { idKey: 'sub' },
    )

    const expected = [
      {
        sub: 1,
        parentId: null,
        children: [{ sub: 3, parentId: 1, children: [] }],
      },
      { sub: 2, parentId: null, children: [] },
    ]

    deepStrictEqual(result, expected)
  })

  it('测试自定义父节点id toTree(parentKey=pid)', function () {
    const result = toTree(
      [
        { id: 1, pid: null },
        { id: 2, pid: null },
        { id: 3, pid: 1 },
      ],
      { parentKey: 'pid' },
    )

    const expected = [
      { id: 1, pid: null, children: [{ id: 3, pid: 1, children: [] }] },
      { id: 2, pid: null, children: [] },
    ]

    deepStrictEqual(result, expected)
  })

  it('测试自定义子节点key toTree(childrenKey=items)', function () {
    const result = toTree(
      [
        { id: 1, parentId: null },
        { id: 2, parentId: null },
        { id: 3, parentId: 1 },
      ],
      { childrenKey: 'items' },
    )

    const expected = [
      { id: 1, parentId: null, items: [{ id: 3, parentId: 1, items: [] }] },
      { id: 2, parentId: null, items: [] },
    ]

    deepStrictEqual(result, expected)
  })
})
