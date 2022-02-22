// 向jquery原型链上添加方法
(function ($) {
    // 给jQuery原型添加方法
    $.fn.bgColor = function (color) {
        this.css('backgroundColor', color)
        return this
    }
})(jQuery)