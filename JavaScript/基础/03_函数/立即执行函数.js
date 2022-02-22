/**
 *
 * 立即执行函数(IIFE Immediately Invoked Function Expression)：
 * 
 * - 函数定义完，立即被调用，立即执行函数往往只会执行一次。
 * 
 * 形式：
 * (匿名函数)()
 * 
 */

// demo1
(function () {
    console.log("一个匿名函数")
})();

// demo2
(function (a, b) {
    console.log(a + b)
})(1, 2);