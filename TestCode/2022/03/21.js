// 按值传递
var a = 1;
b = a;
b = 2;
console.log(a);// 1
// 按址传递
var c = { x: 1 };
var d = c;
d.x = 3;
console.log(c.x)// 3