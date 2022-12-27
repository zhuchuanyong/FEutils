import {
  formatMoney,

} from './index';
import { deepStrictEqual } from 'assert';
describe('测试formatMoney', () => {
  test('测试formatMoney ', () => {
    expect(deepStrictEqual(formatMoney(123555), '123,555'));
  });
});