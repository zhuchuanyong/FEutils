import { chunk, compact, concat,difference } from 'lodash-es'

// chunk 将数组（array）拆分成多个 size 长度的区块
let chunk1 = chunk(['a', 'b', 'c', 'd'], 2)
console.log(chunk1)


// compact
// 去除数组中的假值
let compact1 = compact([0, 1, false, 2, '', 3]);
let compactN = [0, 1, false, 2, '', 3].filter(Boolean);
console.log('compact', compact1)
console.log('compactN', compactN)

// 合并数组
//  concat
let concatArr = [1]
let concat1 = concat(concatArr, 2, [3], [[4]]);
let concatN1 = concatArr.concat(2, [3], [[4]])
let concatN2 = [...concatArr, ...[2, [3, [4]]]]
console.log('concat1', concat1)
console.log('concatN1', concatN1)
console.log('concatN2', concatN2)
console.log('concatArr', concatArr)

// difference 
// 返回不包含在其他给定的数组中值得数组
let difference1 = difference([3, 2, 1], [4, 2]);
let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
let differenceN=arrays.reduce((a, b) => {
    console.log('a', a)
    console.log('b', b)
    return a.filter(c => {
        return !b.includes(c)
    })
})

