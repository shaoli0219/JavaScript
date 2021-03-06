/**
 *
 * 布尔值只有两个，主要用来逻辑判断
 *      - true
 *      - false
 * 
 * 使用typeof检查会返回boolean
 */
let bool1 = true
console.log(bool1)
console.log(typeof bool1) // boolean

/**
 *
 * 将其他数据类型转化为Boolean
 *      - 使用Boolean()函数
 *      - 数字--->布尔
 *          除了0和NaN，其他值都是true
 * 
 *      - 字符串--->布尔
 *          除了空串，其他都是true
 * 
 *      - null和undefined--->布尔
 *          false
 * 
 *      - 对象--->布尔
 *          true
 */

// 数字--->布尔
console.log(Boolean(123)) //true
console.log(Boolean(-123)) //true
console.log(Boolean(-Infinity)) //true
console.log(Boolean(NaN)) //false
console.log(Boolean(0)) //false
// 字符串--->布尔
console.log(Boolean("老王")) //true
console.log(Boolean("")) //false
console.log(Boolean(" ")) //true
// null和undefined--->布尔
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
// 对象--->布尔
console.log(Boolean({
   name: "Laowang"
})) //true
console.log(Boolean({})) //true