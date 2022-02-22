// 纠结了半天的一个错误
let testStr = "abcdefghijkl;"
testStr.substring(0, 1)
console.log(testStr)

// 正解
testStr = testStr.substring(0, 1)
console.log(testStr)

// splice是突变方法，返回被截取的部分
const arr = [1, 2, 3]
arr.splice(0, 0, 'a')
console.log(arr)

