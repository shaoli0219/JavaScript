/**
 * es6新增，表示独一无二的值
 * 
 * symbol 是一种基本数据类型 （primitive data type）。
 * Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。
 * 每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。
 */

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
 // expected output: false
