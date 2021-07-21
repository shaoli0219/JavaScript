/**
 * Array
 * 
 * 属性
 * Array.prototype.length
 * 
 * 方法
 * Array.prototype.push() 向数组末尾添加一个或多个元素，返回数组新长度
 * 
 * Array.prototype.unshift() 向数组开头添加一个或多个元素，返回数组新长度
 * 
 * Array.prototype.shift() 删除数组第一个元素，并返回该元素
 * 
 * Array.prototype.pop() 删除数组最后一个元素，并返回该元素
 */

let arr = ["Tom", "John", "Ari"];

// push()
let resutl = arr.push("Bob");
console.log(resutl, arr);
resutl = arr.push("Clare", "Dan", "Eric");
console.log(resutl, arr);

// unshift()
resutl = arr.unshift("Frank");
console.log(resutl, arr);
resutl = arr.unshift("Galen", "Harry", "Ian");
console.log(resutl, arr);

// shift()
resutl = arr.shift();
console.log(resutl, arr);

// pop()
resutl = arr.pop();
console.log(resutl, arr);