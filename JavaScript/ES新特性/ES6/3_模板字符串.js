// ES6中引入新的字符串声明方式`` （旧'' ""）

//1. 声明
let str = `新的字符串声明方式！！`;
console.log(str, typeof str);

//2.内容中可以直接出现换行符

//不可换行
let oldStr = "<ul><li>老张</li><li>老王</li><li>老李</li></ul>";
//可以换行
let newStr = `<ul>              
                <li>老张</li>
                <li>老王</li>
                <li>老李</li>
              </ul>`;

//3.变量拼接
let names = '魏翔';
let out = `${names}is my favoriate actor!`;
console.log(out);