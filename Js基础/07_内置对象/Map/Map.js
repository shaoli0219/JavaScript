/**
 * Map 对象
 *
 * Map对象保存键值对，并且能够记住键的原始插入顺序。任何桎（对象或者原始值）都可以作为一个键或一个值。
 *
 * Map 属性
 * Map.prototype.size
 *
 * Map 方法
 * Map.prototype.set(key, value)    设置Map对象中键的值。返回该Map对象。
 *
 * Map.prototype.get(key)           返回键对应的值，如果不存在，则返回undefined。
 *
 * Map.prototype.has(key)           返回一个布尔值，表示Map实例是否包含键对应的值。
 *
 * Map.prototype.delete(key)        如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。
 *
 * Map.prototype.clear()            移除Map对象的所有键/值对 。
 *
 * Map.prototype.keys()             返回一个引用的Iterator对象。它包含按照顺序插入Map对象中每个元素的key值。
 * 
 * Map.prototype.entries()          返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。
 * 
 * Map.prototype.values()           返回一个新的Iterator对象。它包含按顺序插入Map对象中每个元素的value值。
 *
 */


const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

// Map.prototype.keys()
const mapKeys = myMap.keys();
console.log(mapKeys.next().value); // "0"
console.log(mapKeys.next().value); // 1
console.log(mapKeys.next().value); // Object

// Map.prototype.entries() 
const mapEntry = myMap.entries();
console.log(mapEntry.next().value); // expected output: ["0", "foo"]
console.log(mapEntry.next().value); // expected output: [1, "bar"]

// Map.prototype.values() 
const mapValues = myMap.values();
console.log(mapValues.next().value); // foo
console.log(mapValues.next().value); // bar

