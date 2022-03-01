var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
vegetables.forEach((item, index) => { console.log(item, index) });
var shallowCopy = vegetables.slice(); // this is how to make a copy
shallowCopy.forEach((item, index) => { console.log(item, index) });
vegetables.pop();
vegetables.forEach((item, index) => { console.log(item, index) });
shallowCopy.forEach((item, index) => { console.log(item, index) });

const arr1 = [4, 1, 2, 1, 2]
const arr2 = [2, 2, 1]

var singleNumber = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[0] ^= nums[i];
    }
    return nums[0];
};
console.log(4 ^ 1)
console.log(4 ^ 1 ^ 2)
console.log(4 ^ 1 ^ 2 ^ 1)
console.log(4 ^ 1 ^ 2 ^ 1 ^ 2)

100
001
101
5
010
111
7
001
110
6
010
100
4