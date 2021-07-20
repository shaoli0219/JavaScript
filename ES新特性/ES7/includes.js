/**
 * Array.prototype.includes()
 *
 * 判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
 */

const array1 = [1, 2, 3];
console.log(array1.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at')); // expected output: false