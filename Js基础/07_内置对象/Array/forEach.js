/**
 * Array.prototype.forEach()
 *
 * forEach()方法对数组的每一个元素执行一次给定的函数，forEach()被调用时，不会改变原数组。
 */

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"