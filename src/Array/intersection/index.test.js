import intersection from './index.js'
describe("intersection", () => {
  test("intersection ", () => {
    let arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
    expect(intersection(arrays)).toEqual([1, 2]);
  });
});