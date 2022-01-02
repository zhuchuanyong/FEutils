const throttle = (callback, delay) => {
  let pre = 0
  return (event) => {
    const current = Date.now()

    if (current - pre > delay) {
      callback.call(this, event)
      pre = current
    }
  }
}

export default throttle
