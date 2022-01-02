import { compact } from '@src/index'
describe('测试 compact', () => {
  test('compact ', () => {
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3])
  })
})
