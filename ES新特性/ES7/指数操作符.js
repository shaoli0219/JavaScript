/**
 * 求幂运算符（**）是ES7的新特性
 * 
 * 返回将第一个操作数加到第二个操作数的幂的结果。它等效于Math.pow，不同之处在于它也接受BigInts作为操作数。
 */

console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
  // expected output: 64