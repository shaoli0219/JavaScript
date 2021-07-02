/**
 *
 * Js中所有的数值都是Number类型
 *      包括
 *          -整数
 *          -浮点数
 *  
 */

// 整数
let a = 123;
// 浮点数
let b = 1.223;
// 字符
let c = "123"

/**
 *
 * 可以使用typeof运算符来检查一个变量的类型
 * 
 */

console.log(typeof a, typeof b, typeof c) // number number string


/**
 * Number类型的特殊值
 * 
 * 数字最大值
 *      Number.MAX_VALUE 
 * 最小正小数
 *      Number.MIN_VALUE
 * Infinity 
 *      超过最大值后表示（正无穷）
 * -Infinity 
 *      超过最小值后表示（负无穷）
 * NaN
 *      not a number
 */

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324

console.log(-Number.MAX_VALUE * Number.MAX_VALUE) // Infinity

let inf = Infinity; // 字面量
console.log(inf); // Infinity
console.log(typeof Infinity); // number

console.log("abc" * "abc") // NaN
console.log(NaN) // number

/**
 *
 * Js中整数的运算基本可以保证精确
 * 
 * Js中浮点数运算可能得到一个不精确的值
 */

console.log(0.1 + 0.2) // 0.30000000000000004