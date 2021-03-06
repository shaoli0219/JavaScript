/**
 * Math.ceil()
 *
 * Math.ceil() 函数返回大于或等于一个给定数字的最小整数。（向上取整）
 */

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

/**
* Math.floor()
*
* Math.floor() 返回小于或等于一个给定数字的最大整数。（向下取整）
*/

Math.floor(45.95);
// 45
Math.floor(45.05);
// 45
Math.floor(4);
// 4
Math.floor(-45.05);
// -46
Math.floor(-45.95);
// -46