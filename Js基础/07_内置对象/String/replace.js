/**
 * String.prototype.replace()
 * 
 * replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
 * 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
 * 如果pattern是字符串，则仅替换第一个匹配项。
 */
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// 如果pattern是字符串，则仅替换第一个匹配项。
// 匹配字符串
const newStr = p.replace('dog', 'monkey')
console.log(newStr); // The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?

// 匹配正则表达式
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret')); // The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?

// 全局匹配
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.