//1. 变量不能重复命名
// let name = 'John';
// let name = 'Bob';
//2. 块级作用域
//3. 不存在变量提升
console.log(name);
let name = 'John'; //报错
var name = 'John'; //变量提升
 //4. 不影响 作用域链
 //一定要赋初始值
 // 一般常量使用大写（潜规则）
 // 常量的值不能修改
 // 块级作用域
 // 对于数组和对象的元素修改，不算做对常量的修改，不会报错