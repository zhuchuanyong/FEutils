const getLocalStorage = (key: string) => {
  let currentTime=new Date().getTime()
  let res:any = null;
  let item:any=null;
  console.log('currentTime', currentTime)
  if (key) {
    item = window.localStorage.getItem(key) || "";
  }
  try {
    item = JSON.parse(item);
    if(currentTime<item.expire){
      res=item.value
    }else {
      removeLocalStorage(key)
      return res;
    }
  } catch (error) {
    return res;
  }

  return res;
};
/**
 *
 * @param key
 * @param value 值
 * @param expire 过期时间(秒)
 * @returns
 */
const setLocalStorage = (key: string, value: any, expire: number) => {
  if (!key) return;

  let time: number | null = null;
  if (expire) {
    time = new Date().getTime() + expire * 1000;
  }
  let store:any = {
    value,
    expire: time,
  };
  store = JSON.stringify(store);
  window.localStorage.setItem(key, store);
};

const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
const clearLocalStorage = () => {
  window.localStorage.clear();
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
};
