/**
 *
 * String字符串
 *      - 字符串用单引号或双引号均可
 *      - 同种引号不能嵌套使用，如若要嵌套则只能使用转义字符
 *      - 双引号可以套单引号，单引号可以套双引号
 * 
 * 转义字符
 *      - 在字符串中我们可以使用\作为转义字符
 *      - \"表示"
 *      - \'表示'
 *      - \n表示换行
 *      - \t表示制表符
 *      - \\表示\
 */

let str1 = "hello,Bob"
let str2 = 'hello,John'
console.log(str1, str2)

let str3 = '"你好，老王"'
let str4 = "'你好，老王'"
console.log(str3, str3)

let str5 = "\\"
let str6 = "\\\\"
console.log(str5, str6)

let str7 = "小明说：\"我不想再吃了\""
console.log(str7)