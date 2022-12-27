/**
 * 金钱格式化，三位加逗号
 * @param num 
 * @returns 
 */
const formatMoney = (num:number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  export {
    formatMoney
  }