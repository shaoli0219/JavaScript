// 允许按照一定模式从数组或对象中提取值对一个或多个变量进行赋值

//1.数组的解构赋值
const names = ['秦始皇', '汉武帝', '唐太宗', '宋高祖'];
let [qin, han, tang, song] = names;
console.log(qin, han, tang, song);

//2.对象的解构赋值
const zhao = {
    name: '赵本山',
    age: '66',
    action: function () {
        console.log("演小品");
    }
}

// 多个
let {
    name,
    age,
    action
} = zhao;

console.log(name, age, action);
action();

// 连续解构赋值
let obj = { a: { b: { c: 1 } } };
// 没有解构赋值
console.log(obj.a.b.c)
// 解构赋值
const { a: { b: { c } } } = obj;
console.log(c)
// 解构赋值别名
const { a: { b: { c: data } } } = obj;
console.log(data)