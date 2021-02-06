import {chunk,compact} from 'lodash-es'

//chunk
//将数组（array）拆分成多个 size 长度的区块
chunk(['a', 'b', 'c', 'd'], 2)

//compact
// 去掉数组中的假值
compact([0, 1, false, 2, '', 3])
[0, 1, false, 2, '', 3].filter(Boolean)

// concat
// 合并数组
var other = concat([1], 2, [3], [[4]])