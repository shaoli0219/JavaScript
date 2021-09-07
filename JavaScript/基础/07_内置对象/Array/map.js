/**
 * Array.prototype.map();
 *
 * map() 方法返回一个`新数组`，其结果是原数组中的每个元素是调用一次提供的函数后的返回值。
 */

// demo1 求平方根
console.log([1, 4, 9, 16].map(Math.sqrt)); // expected output: [1, 2, 3, 4]
console.log([1, 4, 9, 16].map(item => Math.sqrt(item))); // expected output: [1, 2, 3, 4]

// demo2 求字符串数组中的字符长度
console.log([
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
].map(word => word.length));// 箭头函数写法 expected output: [8, 6, 7, 9]

console.log([
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
].map(({ length }) => length));// 参数结构赋值写法 expected output: [8, 6, 7, 9]