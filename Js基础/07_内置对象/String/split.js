/**
 * String.prototype.split()
 *
 * split() 方法使用指定的`字符串`将一个String对象分割成`子字符串数组`，以一个指定的分割字串来决定每个拆分的位置。 
 */
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words);
// expected output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
 // expected output: ["The quick brown fox jumps over the lazy dog."]