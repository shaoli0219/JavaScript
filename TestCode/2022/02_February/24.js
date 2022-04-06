// 分号问题

// 情况一，不加分号默认无分号
var a = 20 // 20后边不会默认加分号，导致和下边自执行函数成为一体
    (function () { console.log(1) })()// 20 is not a function

// 情况二，不加分号默认有分号
function init() {
    return // 这里return后边会默认加一个分号
    {
        a: 1
    }
}

var s = init();
console.log(s.a)// Cannot read property 'a' of undefined

// 变量提升 函数优先级高于变量

function a() { }
var a;
console.log(a) //[Function: a]

// 果如a赋值，函数就无法覆盖
function a() { }
var a = 5;
console.log(a) // 5

// 另一种情况
function a() { }
console.log(a) // [Function: a]
var a = 5;

/**
 * 题目1：变量提升问题
 */
console.log(a);
a();
var a = 3;
function a() {
    console.log(10)
}
console.log(a);
a = 6;
a();

// 转化成等价效果
var a;
function a() {
    console.log(10)
}
console.log(a); // 一个函数体
a();// 10
a = 3;
console.log(a); // 3
a = 6;
a(); // a is not a function
/**
 * 题目1结束
 */

// 变量a依然会被提升
if (false) {
    var a = 20;
}
console.log(a); // undefined

// 变量a在函数中不会被提升
function test() {
    var a = 20;
}
console.log(a) // a is not defined

// 变量提升到函数的顶端，不会提升到函数以外，想要拿到函数中的变量就只能通过闭包了
function yideng() {
    var a = 20;
}

// 所有js代码其实包在一个大的匿名函数中
(function () {
    debugger;
})()

function myAnonymous() {
    debugger;
}
myAnonymous();

// 块级作用域
{
    var a = 20;
}
console.log(a) // 20 可以取到a的值

{
    let a = 20;
}
console.log(a) // a is not defined

// 暂时性死区（TDZ）
var a = 3;
{
    a = 5;
    console.log(a)
    let a;
}

// 在块中定义函数和变量一样，可以在块外取到，如下
{
    function init() {

    }
}
console.log(init); // [Function: init]

{
    function init() {

    }
    init = 3;
}
console.log(init); // 依然输出 [Function: init] 

{
    function init() {

    }
    init = 3;
    console.log("inner", init) // inner 3
}
console.log(init); // 依然输出 [Function: init] 

// bug的示例
{
    init = 4;
    function init() {

    }
    init = 3;
    console.log("inner", init) // inner 3
}
console.log(init); // 4

{
    let init = function init() { }
    init = 3;
}
console.log(init);// init is not defined

{
    let init = function init() { }
    init = 3;
    console.log(init);// 3
}
console.log(init);// init is not defined

// 函数变量提升问题
// 示例 1
function fn() {
    console.log('outer')
}

if (false) {
    function fn() {
        console.log('inner')
    }
}

fn();// outer

// 示例 2
function fn() {
    console.log('outer')
}

function init() {
    if (false) {
        function fn() {
            console.log('inner')
        }
    }
    fn();
}

init();// fn is not a function

// 由于内存fn函数放到init函数中，所以内层的fn声明会提升，如下

// 示例 3
function fn() {
    console.log('outer')
}

function init() {
    var fn;
    if (false) {
        function fn() {
            console.log('inner')
        }
    }
    fn();
}

init();// fn is not a function(大部分浏览器的结果,其实有三种结果：ie-inner chrome-not a function else-outer )

// 测试 use strict 模式下的情况
// 1
"use strict";
function fn() {
    console.log('outer')
}

if (false) {
    function fn() {
        console.log('inner')
    }
}

fn();// outer

// 2
"use strict";
function fn() {
    console.log('outer')
}

function init() {
    if (false) {
        function fn() {
            console.log('inner')
        }
    }
    fn();
}

init();// 此时为 outer ，不开启严格模式为 fn is not a function

// 3
"use strict";
function fn() {
    console.log('outer')
}

function fn() {
    console.log('inner')
}

fn();// inner

