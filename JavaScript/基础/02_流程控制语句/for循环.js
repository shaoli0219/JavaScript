/**
 * for
 *
 * for（倒序）（最快）
 *
 * forEach
 *
 * for…of
 *
 * for…in
 *
 * for…await
 *
 */

/**
 * for…in
 *
 * for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。
 */

const obj = { a: 1, b: 2, c: 3 };

for (let prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

/**
* for…of
*
* for…of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创
* 建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
*/

let iterableArray = [10, 20, 30];

for (const value of iterableArray) {
    console.log(value);
}
// 10
// 20
// 30

for (let value of iterableArray) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31

let iterableStr = "boo";

for (let value of iterableStr) {
    console.log(value);
}
// "b"
// "o"
// "o"