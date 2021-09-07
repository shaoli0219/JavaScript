/**
 * Array.prototype.forEach()
 *
 * forEach()方法对数组的每一个元素执行一次给定的函数，forEach()被调用时，不会改变原数组。
 */

const array = ['a', 'b', 'c']
array.forEach(item => console.log(item))

// expected output: "a"
// expected output: "b"
// expected output: "c"