/**
 * Array.isArray()
 *
 * 用于确定传递的值是否是一个 Array
 */

Array.isArray([1, 2, 3]);
// true
Array.isArray({ foo: 123 });
// false
Array.isArray("foobar");
// false
Array.isArray(undefined);
// falses