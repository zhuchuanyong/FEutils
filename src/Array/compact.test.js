import compact from './compact.js'
test("测试 ", () => {
  expect(compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
});
