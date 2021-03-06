/**
 *
 * 使用构造函数来创建正则表达式（灵活）
 * var reg = new RegExp("正则表达式","匹配模式")
 * 
 * 匹配模式
 *  i 忽略大小写
 *  g 全局匹配（查找所有匹配而非在找到第一个后停止）
 *  m 执行多行匹配
 */
var reg = new RegExp("a")

console.log(reg.test("abc")) //true
console.log(reg.test("bcbc")) //false
console.log(reg.test("dfdabc")) //true
console.log(reg.test("Abb")) //false

/**
 *
 * 使用字面量来创建正则表达式（简单）
 * var reg = /正则表达式/匹配模式
 */
var reg = /a/i
console.log(reg.test("abc")) //true

/**
 * 检查字符串中是否有a或b
 * 使用|
 * 使用[ab]
 */
var reg = /a|b|c/
console.log(reg.test("add")) //true
console.log(reg.test("cdd")) //true
console.log(reg.test("ggg")) //false
var reg = /[ab]/
console.log(reg.test("add")) //true
console.log(reg.test("cdd")) //true
console.log(reg.test("ggg")) //false

/**
 * 检查字符串中是否有字母
 * [a-z] 任意小写字母
 * [A-Z] 任意大写字母
 * [A-z] 任意字母
 * [0-9] 任意数字
 */
var reg = /[A-z]/
console.log(reg.test("d")) //true
console.log(reg.test("k")) //true
console.log(reg.test("2")) //false
console.log(reg.test("M")) //false

// 检查字符串中是否有abc或adc或aec
var reg = /abc|adc|aec/
console.log(reg.test("ppoabeaec")) //true
var reg = /a[bde]c/
console.log(reg.test("ppoabeaec")) //true

/**
 * 非 "^"
 * [^ab] 除了a或b
 */
var reg = /[^ab]/
console.log(reg.test("d")) //true
console.log(reg.test("aa")) //false
console.log(reg.test("abc")) //true
console.log(reg.test("ab")) //false

var reg = /[^0-9]/
console.log(reg.test("123")) //false
console.log(reg.test("12a3")) //true