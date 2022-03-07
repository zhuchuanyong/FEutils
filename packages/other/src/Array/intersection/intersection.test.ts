// import { intersection } from '@lib/index'
import intersection from './index'
describe('测试 intersection', () => {
  test('intersection ', () => {
    const arrays = [
      [1, 2, 3],
      [101, 2, 1, 10],
      [2, 1],
    ]
    expect(intersection(arrays)).toEqual([1, 2])
  })
})
