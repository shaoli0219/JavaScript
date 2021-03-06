/**
 * split()
 * 
 * 默认情况下也会全局匹配
 */
var str = "1a2b3c4d5e6f7"
var result = str.split(/[A-z]/)
console.log(result)

/**
 * search()
 * 
 * 类似于indexOf()且只会查找第一个
 */
var str = "hello abc hello aec afc"
var result = str.search(/a[bef]c/)
console.log(result) // 3

/**
 * match()
 * 
 * 默认情况下，match只会找到第一个符合要求的内容
 * 
 * match()返回的是数组
 */
var str = "1a2b3c4d5e6f7G8H9"
var result = str.match(/[A-z]/gi)
console.log(result) //  a,b,c,d,e,f
console.log(result[2]) //  c

/**
 * replace()
 * 
 * 默认情况下，replace只会替换第一个符合要求的内容
 * 
 * match()返回的是数组
 */
var str = "1a2a3a4d5e6f7G8H9"
var result = str.replace(/[A-z]/gi, "@_@")
console.log(result) //  1@_@2@_@3@_@4@_@5@_@6@_@7@_@8@_@9
var result = str.replace(/[A-z]/gi, "")
console.log(result) //  123456789