/**
 * Array.prototype.every()
 *
 * 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 *
 * 注意：若收到一个空数组，此方法在一切情况下都会返回 true。
 */

//下例检测数组中的所有元素是否都大于 10。
const isBigEnough = item => item > 10;
const result = [12, 5, 8, 130, 44].every(isBigEnough);
console.log(result); // false


/**
 * Array.prototype.some()
 *
 * 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个布尔值。
 *
 * 注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。
 */

const array = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;
console.log(array.some(even)); // expected output: true