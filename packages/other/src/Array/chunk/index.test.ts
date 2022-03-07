import chunk from './index'
import { deepStrictEqual } from 'assert'
describe('测试 chunk', () => {
  test('compact ', () => {
    const array = [0, 1, 2, 3, 4, 5]
    const actual = chunk(array, 3)

    expect(
      deepStrictEqual(actual, [
        [0, 1, 2],
        [3, 4, 5],
      ]),
    )
    // deepStrictEqual(actual, [[0, 1, 2], [3, 4, 5]])
  })
})
