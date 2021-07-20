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