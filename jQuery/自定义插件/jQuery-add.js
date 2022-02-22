// 向jquery原型链上添加方法
(function ($) {
    // 给jQuery原型添加方法
    $.add = function (a, b) {
        return a + b
    }
})(jQuery)