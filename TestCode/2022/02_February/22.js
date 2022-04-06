let arr = new Array(2); // 会创建一个 [2] 的数组吗？
console.log(arr[0])// undefined！没有元素。
console.log(arr.length)// length 2

console.log(typeof [1, 2, 3])// object

o = {};
o[1] = "one";// 用一个整数来索引它
console.log(o)//{ '1': 'one' }

// 数值键名被自动转成字符串
// var arr = ['a', 'b', 'c'];
// console.log(arr['0'])// 'a'
// console.log(arr[0])// 'a'

// let arr = [1, 2, 3];
// console.log(String(arr) === '1,2,3') // true 

console.log([] + 1)     // "1"
console.log([1] + 1)    // "11"
console.log([1, 2] + 1) // "1,21"
console.log("" + 1)     // "1"
console.log("1" + 1)    // "11"
console.log("1,2" + 1)  // "1,21"

//splice模拟增删改
//增
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
myFish.splice(1, 0, 'parot')
console.log(myFish)//[ 'angel', 'parot', 'clown', 'drum', 'mandarin', 'sturgeon' ]
//删
myFish.splice(1, 1)
console.log(myFish)//[ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
//改
myFish.splice(1, 1, 'parot')
console.log(myFish)//[ 'angel', 'parot', 'drum', 'mandarin', 'sturgeon' ]