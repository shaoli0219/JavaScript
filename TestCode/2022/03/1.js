/* var obj = {
    foo: function () {
        console.log(this)
        console.log(this.bar)
    },
    bar: 1
}

var foo = obj.foo;
var bar = 2;

obj.foo();
foo(); */
// chrome浏览器环境结果
// {bar: 1, foo: ƒ}
// 1
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 2

// node环境
// { foo: [Function: foo], bar: 1 }
// 1
// Object [global]
// undefined



