import {
  formatFileSize,
} from './index';
import { deepStrictEqual } from 'assert';
describe('测试formatFileSize', () => {
  test('测试1.00KB 1024 ', () => {
    expect(deepStrictEqual(formatFileSize(1024), '1.00KB'));
  });

  test('测试100B 100 ', () => {
    expect(deepStrictEqual(formatFileSize(100), '100B'));
  });

  test('测试6.00MB 6291456 ', () => {
    expect(deepStrictEqual(formatFileSize(6291456), '6.00MB'));
  });

  test('测试1.42GB  1526726656 ', () => {
    expect(deepStrictEqual(formatFileSize(1526726656), '1.42GB'));
  });
});