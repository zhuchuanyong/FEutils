/**
 * 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 * @param {Array} arr  待处理的数组
 * @return {Array}  返回过滤掉假值的新数组
 */
const compact=(arr)=>{
    return  arr.filter(Boolean)
}
export default compact