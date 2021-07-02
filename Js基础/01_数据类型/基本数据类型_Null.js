/**
 *
 * Null（空值）类型只有一个值，就是null
 * null这个值专门用来表示一个为空的对象
 * 
 * typeof 检测返回object
 * 
 */

let a = null; // 指向为空
console.log(a); // null
console.log(typeof a); // object

let obj = {}; // 内容为空
if (a) {
   console.log("执行")
}
console.log(obj);