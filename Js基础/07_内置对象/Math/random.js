/**
 * Math.random()
 *
 * - 函数返回一个浮点数,  伪随机数在范围从0到小于1
 * - 不能提供像密码一样安全的随机数字。不要使用它们
 * 来处理有关安全的事情。使用Web Crypto API 来代替, 和更精确的window.crypto.getRandomValues() 方法
 */

// 获取一个小于n的整数
function getRandomInt(n) {
   return Math.floor(Math.random() * n);
}

// 获取一个小于max大于等于min的整数
function getRandomIntUninclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

// 获取一个小于等于max大于等于min的整数
function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

for (var i = 0; i < 10; i++) {
   console.log(getRandomInt(5))
}

for (var i = 0; i < 10; i++) {
   console.log(getRandomIntUninclusive(5, 10))
}

for (var i = 0; i < 10; i++) {
   console.log(getRandomIntInclusive(5, 10))
}