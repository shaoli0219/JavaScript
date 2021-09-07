/**
 * 闭包
 * 
 * 闭包就是能够读取其它函数内部变量的函数。在JavaScript中，，只用函数内部的子函数才能读取局部变
 * 量，所以闭包也可以理解成`定义在一个函数内部的函数`。本质上，闭包是将函数内部和外部链接起来的桥梁
 */

// demo1
function a() {
    var i = 0;
    function b() {
        console.log(++i);
    }
    return b;
}
var c = a();
c();// 1
c();// 2
c();// 3
/* 
特点
    这段代码有两个特点：
        1、函数b嵌套在函数a内部；
        2、函数a返回函数b。
    这样在执行完var c=a( )后，变量c实际上是指向了函数b，再执行c( )后就会在控制台显示i的值（第一次为1）。
    这段代码其实就创建了一个闭包，这是因为函数a外的变量c引用了函数a内的函数b。也就是说，当函数a的内部函数b被
    函数a外的一个变量引用的时候，就创建了一个闭包。
作用
    简而言之，闭包的作用就是在a执行完并返回后，闭包使得Javascript的垃圾回收机制不会收回a所占用的资源，因为a
    的内部函数b的执行需要依赖a中的变量。
    在上面的例子中，由于闭包的存在使得函数a返回后，a中的i始终存在，这样每次执行c()，i都是自加1后alert出i的值。
    那 么我们来想象另一种情况，如果a返回的不是函数b，情况就完全不同了。因为a执行完后，b没有被返回给a的外界，
    只是被a所引用，而此时a也只会被b引 用，因此函数a和b互相引用但又不被外界打扰（被外界引用），函数a和b就会被回收。
*/

// demo2
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    console.log(arr);
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f1(); //16
f2(); //16
f3(); //16

//demo3
function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter

    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)// 1 2 3

//demo4
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);