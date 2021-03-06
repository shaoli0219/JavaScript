//ES6 允许给函数参数设置初始值
//1. 可以给函数形参默认值，一般位置靠后
function add(a, b, c = 10) {
    return a + b + c;
}
let result = add(1, 3);
console.log(result); //14

//2. 与解构赋值结合
function connect({
    host = '127.0.0.1',
    username,
    password,
    port
}) {
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    // host: 'localhost',
    username: 'root',
    password: 'test',
    port: 3000
});