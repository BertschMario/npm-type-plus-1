const boo = require('./dist')

const testObj = {id:0,comment:'test'}
const testArray = [{id:0,comment:'test1'},{id:1,comment:'test2'},{id:2,comment:'test3'}]

console.log(boo.objectProperties(testObj))
console.log(boo.arrayObjectValue(testArray, 'comment'))
console.log(boo.arrayObjectValue(testArray, 'property'))
console.log(boo.arrayGetFirst(testArray))
console.log(boo.arrayGetLast(testArray))