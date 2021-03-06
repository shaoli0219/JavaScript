/**
 * 检查一个字符串中是否有"."
 * "."表示任意字符
 * 在正则表达式中"\"表示转义字符
 * \.表示.
 * \\表示\
 * 
 * 注意：使用构造函数时
 */

var reg = /\./
var str = "abd."
var result = reg.test(str)
console.log(result) //true

var reg = /\./
var str = "abd"
var result = reg.test(str)
console.log(result) //false

var reg = /\\/
var str = "ab\\d" // 字符串中表示\也得\\
var result = reg.test(str)
console.log(result) //true

var reg = new RegExp(".")
console.log(reg)
var str = "ab\\d"
var result = reg.test(str)
console.log(result) //true

var reg = new RegExp("\.")
console.log(reg)
var str = "ab\\d"
var result = reg.test(str)
console.log(result) //true

var reg = new RegExp("\\.")
console.log(reg)
var str = "ab\\d"
var result = reg.test(str)
console.log(result) //true

var reg = new RegExp("\\\\")
console.log(reg)
var str = "ab\d"
var result = reg.test(str)
console.log(result) //false

/**
 * \w 任意字母、数字和_ [A-z0-9_]
 * \W 非任意字母、数字和_[^A-z0-9_]
 * 
 * \d 任意数字
 * \D 非任意数字
 * 
 * \s 空格
 * \S 非空格
 * 
 * \b 单词边界
 * \B 非单词边界
 */
var reg = /\w/
var str = "1"
var result = reg.test(str)
console.log(result) //true

var reg = /\w/
var str = "a"
var result = reg.test(str)
console.log(result) //true

var reg = /\w/
var str = "_"
var result = reg.test(str)
console.log(result) //true

var reg = /\s/
var str = "12344"
var result = reg.test(str)
console.log(result) //false

var reg = /\bchild\b/
var str = "hello child"
var result = reg.test(str)
console.log(result) //false

/**
 * 去字符串前后空格
 */
var str = "      hello   Bob  "
str = str.replace(/^\s*|\s*$/g, "")
console.log(str)