// "..." 扩展运算符能将数组转换为逗号分隔的参数序列

// 基本用法
const names = ['John', 'Bob', 'Alice'];

function show() {
    console.log(arguments);
}

show(...names);
// 相当于
show('John', 'Bob', 'Alice');

//1. 数组合并
const a = ['西安', '北京'];
const b = ['广州', '上海'];
const c = [...a, ...b];
//2. 数组克隆
const d = [...c];
//3. 将伪数组转为真数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];