// ES6 引入 rest 参数，用于获取函数实参，用来代替 arguments
// ES5 获取实参方式
// function date() {
//     console.log(arguments)
// }
// date('John', 'Bob', 'Alice');
// rest方式
function date(...args) {
    console.log(args)
}
date('John', 'Bob', 'Alice');
// rest 参数必须要放到参数最后

function fn(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
fn(1, 2, 3, 4, 5, 56, 67)