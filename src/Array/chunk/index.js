/**
 *
 * @param {Array} array
 * @param {number} size
 * @return {Array} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 *
 */
const chunk = (array, size) => {
  return array.reduce((arr, item, idx) => {
    // arr 拆分的区块数据
    // 二维数组 有余数 说明最后一个区块数据不足
    // 无余数 说明每一区块数据正好，需要添加新区块
    // let remainder = idx % size;
    // let res = [];
    // if (remainder === 0) {
    //   res = [...arr, [item]];
    // } else {
    //   let a = arr.slice(0, -1); // 取arr 里除最后一个的全部item
    //   let b = arr.slice(-1)[0]; // 获取最后一项
    //   res = [...a, [...b, item]];
    // }
    // return res;
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export default chunk
