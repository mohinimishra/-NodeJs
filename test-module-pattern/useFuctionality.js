const func = require('./functionalities') // returns module.exports object from that file

const sum = require('./functionalities').add;

console.log(func)

let add = func.add(2, 3);


console.log(add)

console.log(func.value)

console.log(sum(3, 3))