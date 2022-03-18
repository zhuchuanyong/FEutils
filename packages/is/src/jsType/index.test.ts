import {
  isString,
  isObject,
  isArray,
  isDate,
  isNumber,
  isBoolean,
} from './index';
import { deepStrictEqual } from 'assert';
describe('测试isString', () => {
  test('测试isString true ', () => {
    expect(deepStrictEqual(isString('12'), true));
  });
  test('测试isString false ', () => {
    expect(deepStrictEqual(isString(2), false));
  });
});

describe('测试isObject', () => {
  test('测试iisObject true ', () => {
    expect(deepStrictEqual(isObject({}), true));
  });
  test('测试isObject false ', () => {
    expect(deepStrictEqual(isObject(2), false));
  });
});

describe('测试isArray', () => {
  test('测试isArray true ', () => {
    expect(deepStrictEqual(isArray([]), true));
  });
  test('测试isArray false ', () => {
    expect(deepStrictEqual(isArray(2), false));
  });
});

describe('测试isDate', () => {
  test('测试isDate true ', () => {
    const time = new Date();
    expect(deepStrictEqual(isDate(time), true));
  });
  test('测试isDate false ', () => {
    expect(deepStrictEqual(isDate(2), false));
  });
});

describe('测试isNumber', () => {
  test('测试isNumber true ', () => {
    expect(deepStrictEqual(isNumber(1), true));
  });
  test('测试isNumber false ', () => {
    expect(deepStrictEqual(isNumber([]), false));
  });
});

describe('测试isBoolean', () => {
  test('测试isBoolean true ', () => {
    expect(deepStrictEqual(isBoolean((1 + 1 == 2)), true));
  });
  test('测试isBoolean false ', () => {
    expect(deepStrictEqual(isBoolean(33), false));
  });
});
