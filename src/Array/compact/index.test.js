import compact from './index.js'
describe("compact", () => {
  test("compact ", () => {
    expect(compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
  });
});
