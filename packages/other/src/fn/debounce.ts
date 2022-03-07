/**
 * 
 * @param callback 回调函数
 * @param delay 需要延迟的毫秒数
 * @returns 返回新的 debounced（防抖动）函数
 */
const debounce = (callback: any, delay: number | undefined) => {
  return (event: any) => {
    if (callback.timeid) {
      clearTimeout(callback.timeid)
    }

    callback.timeid = setTimeout(() => {
      callback.call(this, event)

      // 记得删除
      delete callback.timeid
    }, delay)
  }
}

export default debounce
