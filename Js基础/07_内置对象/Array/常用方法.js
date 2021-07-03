let arr = ["Tom", "John", "Ari"];

/**
 * Array.prototype.push()
 * 
 * 向数组末尾添加一个或多个元素，返回数组新长度
 */

// 添加一个元素
let resutl = arr.push("Bob");
console.log(resutl, arr)
// 添加多个元素
resutl = arr.push("Clare", "Dan", "Eric")
console.log(resutl, arr)

/**
 * Array.prototype.pop()
 * 
 * 删除数组最后一个元素，并返回该元素
 */

resutl = arr.pop()
console.log(resutl, arr)

/**
 * Array.prototype.unshift()
 * 
 * 向数组开头添加一个或多个元素，返回数组新长度
 */

// 添加一个元素
resutl = arr.unshift("Frank");
console.log(resutl, arr)
// 添加多个元素
resutl = arr.unshift("Galen", "Harry", "Ian")
console.log(resutl, arr)

/**
 * Array.prototype.shift()
 * 
 * 删除数组第一个元素，并返回该元素
 */

resutl = arr.shift()
console.log(resutl, arr)

/**
 * Array.prototype.concat()
 * 
 * 链接两个或多个数组，并返回结果
 * 该方法不会对原数组产生影响
 */

let arr1 = ["关羽", "张飞", "刘备"]
let arr2 = ["中国", "美国", "德国"]
let newArr = arr.concat(arr1)
console.log(arr)
console.log(arr1)
console.log(newArr)
newArr = arr.concat(arr1, arr2)
console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(newArr)

/**
 * Array.prototype.join()
 * 
 * 把数组转换为字符串,并返回结果
 * 该方法不会对原数组产生影响
 * 可以指定字符串作为参数，这个参数将成为新字符串的连接符(默认逗号)ce
 */

newArr = arr.join()
console.log(newArr) // Harry,Ian,Frank,Tom,John,Ari,Bob,Clare,Dan

newArr = arr.join("@_@")
console.log(newArr) // Harry@_@Ian@_@Frank@_@Tom@_@John@_@Ari@_@Bob@_@Clare@_@Dan

/**
 * Array.prototype.reverse()
 * 
 * 反转字符串
 * 该方法会对原数组产生影响
 */

newArr = arr.reverse()
console.log(arr)
console.log(newArr)

/**
 * Array.prototype.sort()
 * 
 * 排序,默认按照unicode编码排序，即使是纯数字也会按unicode
 * 该方法会对原数组产生影响
 */

arr = ['John', 'Bob', 'Ari', 'Eric', 'Frank', 'Gallen', 'Clare']
newArr = arr.sort()
console.log(arr)
console.log(newArr)


/**
 * 直接使用sort()排序纯数字数组可能会失败
 * 给sort()添加一个回调可以来指定排序规则
 */

arr = [3, 34, 5, 11, 6]
// 升序
console.log(arr.sort(function (a, b) {
    return a - b
}))
// 降序
console.log(arr.sort(function (a, b) {
    return b - a
}))

/**
 * Array.prototype.toString()
 *
 * toString() 返回一个字符串，表示指定的数组及其元素。
 */

const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());// expected output: "1,2,a,1a"