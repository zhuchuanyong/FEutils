
import {chunk} from 'lodash-es';
let a=chunk(['a', 'b', 'c', 'd'], 2);
console.log('a', a)
const fn =()=>{
    console.log('123', 123)
}

export {
    fn
}