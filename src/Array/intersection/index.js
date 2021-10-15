const intersection = (args) => {
  // 累加值a 就是要返回的结果
  // 用累加值a的每一项 判断存不存在 当前值b<arr> 中
  // 存在则返回
  return args.reduce((a, b) => a.filter((c) => b.includes(c)));
};

export default intersection
