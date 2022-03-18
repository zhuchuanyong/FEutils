/**
 * 检查 value 是否是原始字符串String或者对象
 * @param value 要检查的值
 * @returns 如果 value 为一个字符串，那么返回 true，否则返回 false
 */
const isString = (value:any):Boolean => {
 return Object.prototype.toString.call(value) === '[object String]'
};

const isObject= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Object]'
 };

 const isArray= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Array]'
 };

 const isDate= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Date]'
 };

 const isNumber= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Number]'
 };
 const isBoolean= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Boolean]'
 };

 const isNull= (value:any):Boolean => {
  return Object.prototype.toString.call(value) === '[object Null]'
 };




export {
  isString,
  isObject,
  isArray,
  isDate,
  isNumber,
  isBoolean,
  isNull
};
