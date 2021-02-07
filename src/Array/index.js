
import {chunk} from 'lodash-es';
let a=chunk(['a', 'b', 'c', 'd'], 2);
console.log('a', a)
const fn =()=>{
    console.log('123', 123)
}
let arr=[1,3,5]
console.log('...arr', ...arr)


class Person {
    constructor (name, gender = '男') {
        this.name = name
        this.gender = gender
    }

    say () {
        console.log(`我的名字是${this.name}，是一个${this.gender}生`)
    }
}


export {
    fn,
    Person
}