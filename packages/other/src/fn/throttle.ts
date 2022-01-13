const throttle = (callback: { call: (arg0: undefined, arg1: any) => void }, delay: number) => {
  let pre = 0
  return (event: any) => {
    const current = Date.now()

    if (current - pre > delay) {
      callback.call(this, event)
      pre = current
    }
  }
}

export default throttle
