/**
 * Json
 * 
 * - js中的对象只有js认识，其它语言都不认识
 * - json是一个特殊的字符串，这个字符串可以被任何语言识别，并且可以转换为任意语言中的对象，json在开发中主要用来数据交互
 * - json和js对象格式一样，只不过json字符串中的属性名必须加双引号
 * - json分类
 *     1.对象{}
 *     2.数组[]
 * - json中允许的值
 *   1.字符串
 *   2.数值
 *   3.布尔值
 *   4.null
 *   5.对象
 *   6.数组
 */

// 创建一个key不带引号的对象
var obj1 = {
    name: "Laowang",
    age: 18,
    gender: "男"
}

// 创建一个key带引号的对象（等同不带引号）
var obj2 = {
    "name": "Laowang",
    "age": 18,
    "gender": "男"
}

// console.log(obj1)
// console.log(obj2)

/************************************************************/

// json对象
var josnObj = '{"name":"laowang","age":18,"gender":"male"}'
// json数组
var jsonArr = '[1,2,3,"hello",true]'
// json中允许的值
var jsonObj1 = '{"arr":[1,2,3]}'
// json中允许的值
var jsonObj2 = '[{"name":"laowang","age":18,"gender":"male"},{"name":"laowang","age":18,"gender":"male"}]'

/************************************************************/

/**
 * json字符串转换js对象方法
 *      - js为我们提供了一个工具类，叫JSON
 * js对象-->json
 *      - JSON.stringfly()
 * json-->js对象
 *      - JSON.parse()
 */

// json字符串转js对象
console.log(JSON.parse(josnObj))
console.log(JSON.parse(jsonArr))

// js对象转json字符串
console.log(JSON.stringify(obj1))