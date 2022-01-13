/**
 * 创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值
 * @param {Array} 要检查的数组
 * @param {Array} 排除的值
 * @return {Array} 返回一个过滤值后的新数组
 */
const difference = (array: any, values: any) => {
  const arr = [array, values]
  //   return arr.reduce((a, b) => {
  //     return a.filter((c) => {
  //       return !b.includes(c);
  //     });
  //   });
  arr.reduce((a, b) => a.filter((c: any) => !b.includes(c)))
}

export default difference
