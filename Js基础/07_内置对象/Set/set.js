/**
 * set 对象
 * 
 * set 对象允许你存储任何类型的 唯一值 ，无论是原始值或者是对象引用。
 * 
 * Set.prototype.keys()             返回一个引用的Iterator对象。它包含按照顺序插入Set对象中每个元素的key值。
 * 
 * Set.prototype.entries()          返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Set 对象的插入顺序相同。
 * 
 * Set.prototype.values()           返回一个新的Iterator对象。它包含按顺序插入Set对象中每个元素的value值。
 */

const set1 = new Set([1, 2, '121', 'alice']);

/**
 * Set.prototype.has()
 * 
 * The has() method returns a boolean indicating whether an element with the specified 
 * value exists in a Set object or not.
 */

console.log(set1.has(1));
// expected output: true

console.log(set1.has('121'));
// expected output: true

console.log(set1.has('a'));
// expected output: false

/**
 * Set.prototype.add()
 * 
 * 在Set对象尾部添加一个元素。返回该Set对象。
 */

set1.add('Bob');

/**
 * Set.prototype.delete()
 * 
 * The delete() method removes a specified value from a Set object, if it is in the set.
 */

console.log(set1.delete('bar'));
// Returns false. No "bar" element found to be deleted.
console.log(set1.delete(1));
// Returns true. Successfully removed.

/**
 * Set.prototype.size
 * 
 * The size accessor property returns the number of (unique) elements in a Set object.
 */

console.log(set1.size);
// expected output: 5

/**
 * Set.prototype.clear()
 *
 * 移除Set对象内的所有元素。
 */

set1.clear();
console.log(set1.size);
// expected output: 0