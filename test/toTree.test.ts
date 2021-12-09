import { toTree } from '../dist/index'
import { deepStrictEqual } from 'assert'

describe('transform/toTree.js', function () {
  it('test toTree()', function () {
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
})
