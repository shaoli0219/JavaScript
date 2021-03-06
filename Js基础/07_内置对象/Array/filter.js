/**
 * Array.prototype.filter()
 * 
 * filter() 方法创建一个`新数组`, 其包含通过所提供函数实现的测试的所有元素。
 */

//demo1 按条件过滤字符串
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const res = words.filter(item => item.length > 6);
console.log(res);

//demo2 按条件过滤数组
// 匿名函数
console.log([12, 5, 8, 130, 44].filter(function (item) {
    return item > 10
}));

// 最简单形式(匿名函数的箭头函数形式)
console.log([12, 5, 8, 130, 44].filter(item => item > 10));

// 函数定义
const isBigEnough1 = function (item) {
    return item > 10
}
console.log([12, 5, 8, 130, 44].filter(isBigEnough1));

// 函数定义（箭头函数）
const isBigEnough3 = item => item > 10
console.log([12, 5, 8, 130, 44].filter(isBigEnough3));

// 函数声明
function isBigEnough2(item) {
    return item > 10
}
console.log([12, 5, 8, 130, 44].filter(isBigEnough2));

// 高级函数
const isBigEnough4 = (item) => {
    return item > 10
}
console.log([12, 5, 8, 130, 44].filter(item => isBigEnough4(item)));

// 函数柯里化
const isBigEnough5 = () => {
    return item => item > 10
}
console.log([12, 5, 8, 130, 44].filter(isBigEnough5()));