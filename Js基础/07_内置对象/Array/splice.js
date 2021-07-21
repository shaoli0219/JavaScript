/**
 * Array.prototype.splice()
 *
 * 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
 */

/**
 * 要求
 * 
 * 从索引 2 的位置开始删除 0 个元素，插入“drum”
 */
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除

/**
 * 要求
 * 
 * 从索引 3 的位置开始删除 1 个元素
 */
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]

/**
 * 要求
 * 
 * 从索引 0 的位置开始删除 2 个元素，插入"parrot"、"anemone"和"blue"
 */
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素: ["angel", "clown"]

/**
 * 要求
 * 
 * 从索引 -2 的位置开始删除 1 个元素
 */
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

 // 运算后的 myFish: ["angel", "clown", "sturgeon"]
 // 被删除的元素: ["mandarin"]