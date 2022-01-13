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
