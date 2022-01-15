 const getLocalStorage = (key: string) => {
  let res = "";
  if (key) {
    res = window.localStorage.getItem(key) || "";
  }
  try {
    res = JSON.parse(res);
  } catch (error) {
    return res;
  }

  return res;
};
 const setLocalStorage = (key: string, store: any) => {
  if (!key) return;
  if (typeof store == "object") {
    store = JSON.stringify(store);
  }
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
