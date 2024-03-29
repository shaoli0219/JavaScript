/**
 * 作用域:
 *      - 作用域指一个变量的作用范围
 *      - js中一共有两种作用域 `全局作用域` 和 `函数作用域`
 *
 * 全局作用域:
 *      - 直接编写在script标签中的js代码，都在全局作用域
 *      - 全局作用域在页面打开时创建，在页面关闭时销毁
 *      - 全局作用域中有一个全局对象 `window` ，它代表的是一个浏览器窗口，它由浏览器对象创建并且可以直接使用
 *      - 在全局作用域中的变量都是全局变量，在页面的任意部分都可以访问到
 *      - 在全局作用域中
 *              创建的变量都会作为window对象的属性保存
 *              创建的函数都会作为window对象的方法保存
 *
 * 函数作用域:
 *      - 调用函数时创建函数作用域，函数执行完毕后，函数作用域销毁
 *      - 每调用一次函数就回创建一个新的函数作用域，他们之间是互相独立的
 *      - 在函数作用域中可以访问全局作用域的变量，在全局作用域中无法访问函数作用域的变量
 *      - 当函数作用域操作一个变量时，它会先在自身作用中寻找，如果有就直接使用，没有就向上一级作用域中寻找
 *
 * 变量提升:
 *      - JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
 */

var a = 123;
function fun1() {
    //当函数作用域操作一个变量时，它会先在自身作用中寻找，如果有就直接使用，没有就向上一级作用域中寻找
    console.log(a);
}
fun1(); // 123

var b = 123;
function fun2() {
    //JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
    console.log(b);
    var b = 456;
}
fun2(); // undefined
//调用函数时创建函数作用域，函数执行完毕后，函数作用域销毁
console.log(b) //123

var c = 123;
function fun3() {
    console.log(c);
    c = 456;
}
fun3(); // 123
console.log(c) //456

var d = 123;
function fun4(d) {
    // 相当于var d;
    console.log(d);
    d = 456;
}
fun4(); // undefined
console.log(d) //123

var e = 123;
function fun5(e) {
    console.log(e);
    e = 456;
}
fun5(e); //123
console.log(e) //123

function foo() {
    if (true) {
        var number = 5
        console.log(number)
    }
    console.log(number)
}
foo() // 5 和 5

function bar() {
    if (true) {
        let number = 5
        console.log(number)
    }
    console.log(number)
}
bar() // 5 和 ReferenceError: number is not defined