/**
 * {n}正好出现n次,且只对前一个内容起作用
 * {m,n}正好出现m-n次,且只对前一个内容起作用
 * {m,}出现m次以上,且只对前一个内容起作用
 * "+" 至少一个{1,}
 * "*" 0或多个{0,}
 * "?" 0或一个{0,1}
 */

var reg = /a{3}/
var str = "aakkkkaaaee"
var result = reg.test(str)
console.log(result) //true

var reg = /(ab){3}/
var str = "aakkkkabababaaaee"
var result = reg.test(str)
console.log(result) //true

var reg = /b{3}/
var str = "bbbb"
var result = reg.test(str)
console.log(result) //true

var reg = /ab{3}c/
var str = "abbbbc"
var result = reg.test(str)
console.log(result) //false

var reg = /ab{1,3}c/
var str = "abbbbc"
var result = reg.test(str)
console.log(result) //false

var reg = /ab{1,3}c/
var str = "abbbc"
var result = reg.test(str)
console.log(result) //true

/**
 * 检查字符串是否以开头或结尾
 * ^ 表示开头
 * $ 表示结尾
 */

var reg = /^a/
var str = "kkkkaaaee"
var result = reg.test(str)
console.log(result) //false

var reg = /a$/
var str = "kkkkaaaeea"
var result = reg.test(str)
console.log(result) //true

var reg = /^a$/
var str = "aaa"
var result = reg.test(str)
console.log(result) //false


/**
 * 检测试手机号是否合法
 * 1、以1开头
 * 2、3-9任意数字 
 * 3、3位以后任意数字9个
 */
var reg = /^1[3-9][0-9]{9}$/
var str = "11765910336"
var result = reg.test(str)
console.log(result) //true