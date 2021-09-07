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