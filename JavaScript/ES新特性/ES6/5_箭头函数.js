//普通函数声明
let fn1 = function (a, b) {
    return a + b;
}
console.log(fn1(1, 2))

//箭头函数声明
let fn2 = (a, b) => {
    return a + b;
}
console.log(fn2(2, 3))

//1. this是静态的。this始终指向函数声明时所在作用域下的this的值
function getName() {
    console.log(this.name)
}
let getName2 = () => {
    console.log(this.name)
}

window.name = "希腊";
const nation = {
    name: "xila"
}

// 直接调用
getName();
getName2();

//call()方法
getName.call(nation); //xila
getName2.call(nation); //希腊

//2. 不能作为构造实例化对象
let Person = (name, age) => {
    this.name = name;
    this.age = age;
}

// let me = new Person('xiao', 30);
// console.log(me); //报错

//3. 不能使用arguments变量
let fuc = () => {
    console.log(arguments);
}
// fuc(1,2,3); //报错

//4. 箭头函数简写
//形参有且只有一个的时候可以省略小括号

let add = n => {
    return n + n
}
console.log(add(9));
//省略花括号，当代码体只有一条语句的时候
// let pow = n => {
//     return n * n
// };
// 简写
let pow = n => n * n;
console.log(pow(9));