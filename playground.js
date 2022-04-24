const boo = require('./dist')
const {tpFL_OP, tpFL} = require("./dist/tpFL");

const test1 = "abc";
const test2 = 1010;
const test3 = [{test:'test1'},{test:'test2'},{test:'test3'},{test:'test4'}];
const test4 = ['abc'];

test1.tpToStoreItem('test1');
test2.tpToStoreItem('test2');
test3.tpToStoreItem('test3');
test4.tpToStoreItem('test4');

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)

console.log(tpGetStoreItem('test1'))
console.log(tpGetStoreItem('test2'))
console.log(tpGetStoreItem('test3'))
console.log(tpGetStoreItem('test4'))

console.log(tpGetAllStoreIds())

// IN PRODUCTION
//console.log(new tpFL().Object(test3).Property('test').Operator(tpFL_OP.includes).Value('2').Execute())