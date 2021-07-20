/**
 * Array.prototype.toString()
 *
 * toString() 返回一个字符串，表示指定的数组及其元素。
 */

const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());// expected output: "1,2,a,1a"

const myHonda = [{ color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }];
console.log(myHonda.toString());// expected output: "[object Object]"