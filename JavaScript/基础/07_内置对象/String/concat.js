/**
 * String.prototype.concat()
 * 
 * concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
 * 效率不如+或+=
 */
let hello = 'hello'
let helloNew = hello.concat(',', 'zai zai ', 'have a nice day')
console.log(helloNew) // hello,zai zai have a nice day

let greetList = ['hello', ' ', 'Vencent']
console.log(''.concat(...greetList)) // hello Vencent