/**
 * 将其他数据类型转化为String
 *
 * 方式1：调用被转换数据的toString()方法
 *      - null和undefined这两个值没有toString()方法，如果调用会报错
 * 
 * 方式2：调用String()方法，并将被转换的数据作为参数传入
 *      - null会被转成字符null
 *      - undefined会被转成undefined
 *      
 */

let a = 123;
a = a.toString();
console.log(typeof a); // string
console.log(a); // 123

let b = null;
b = String(b);
console.log(typeof b); // string
console.log(b); // null

/**
 * 将其他数据类型转化为Number
 *
 * 
 * 方式1：调用Number()方法，并将被转换的数据作为参数传入
 *      - 纯数字字符串      --->    转换为数字
 *      - 有非数字字符串    --->    NaN
 *      - 空串或空格串      --->    0
 *      - null             --->    0
 *      - undefined        --->    NaN
 *      - Infinity         --->    Infinity
 *      - true             --->    1
 *      - false            --->    0
 * 
 * 方式2：调用parseInt()或parseFloat()方法，专门用来强转字符串
 *      - 只提取数字，如：123px ---> 123
 *      - 字符若是非数字开头则NaN
 */

let strOld = '332';
num = Number(strOld);
console.log(typeof num); //number
console.log(strOld, '--->', num) //332

strOld = 'aaa';
str = Number(strOld);
console.log(strOld, '--->', str) //NaN

strOld = 'abc123';
str = Number(strOld);
console.log(strOld, '--->', str) //NaN

strOld = '';
str = Number(strOld);
console.log(strOld, '--->', str) //0

strOld = '   ';
str = Number(strOld);
console.log(strOld, '--->', str) //0

strOld = null;
str = Number(strOld);
console.log(strOld, '--->', str) //0

strOld = undefined;
str = Number(strOld);
console.log(strOld, '--->', str) //NaN

strOld = Infinity;
str = Number(strOld);
console.log(strOld, '--->', str) //Infinity

strOld = true;
str = Number(strOld);
console.log(strOld, '--->', str) //1

strOld = false;
str = Number(strOld);
console.log(strOld, '--->', str) //0

console.log("----------------------------------------------------------------")

strOld = '123px';
str = parseInt(strOld);
console.log(strOld, '--->', str) //123

strOld = '123px321';
str = parseInt(strOld);
console.log(strOld, '--->', str) //123

strOld = '123.222px';
str = parseInt(strOld);
console.log(strOld, '--->', str) //123

strOld = 'aa123';
str = parseInt(strOld);
console.log(strOld, '--->', str) //NaN


strOld = '123.222px';
str = parseFloat(strOld);
console.log(strOld, '--->', str) //123.222

strOld = '123.2a22px';
str = parseFloat(strOld);
console.log(strOld, '--->', str) //123.2

strOld = 'a123.222px';
str = parseFloat(strOld);
console.log(strOld, '--->', str) //NaN