/**
 * 原型prototype
 * 
 *      我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是所谓的原型对象
 *      如果函数作为普通函数调用prototype没有任何作用
 * 
 *      当函数以构造函数形式调用时，构造函数创建的对象中都会有一个隐含属性指向该构造函数的原型对象，我们可以通过__proto__来 访问该属性
 *      原型对象就相当于一个公共区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中
 * 
 *      我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找
 * 
 *      以后创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中
 */

function MyClass() { }

console.log(MyClass.prototype)

var mc = new MyClass()
console.log(mc.__proto__)

console.log(MyClass.prototype == mc.__proto__) //true

MyClass.prototype.a = 123
MyClass.prototype.sayHello = function () {
    console.log("hello")
}

var mc2 = new MyClass()
mc2.sayHello()

MyClass.prototype.name = "原型中的name"

// 使用 in 检查对象中是否含有某个属性，如果对象没有原型中有，也会返回true
console.log("name" in mc2) //true

// 可以使用对象的 hasOwnProperty() 来检查对象自身是否有该属性
console.log(mc2.hasOwnProperty("name")) //false

/**
 * 原型对象也是对象，所以它也有原型
 * 
 * 当我们使用一个对象的属性或方法时，会先在自身中找
 *      如果自身有，则直接使用
 *      如果没有则去原型中找，有则使用
 *      如果没有在原型的原型中找
 */

console.log(mc2.hasOwnProperty("hasOwnProperty")) //false

console.log(mc2.__proto__.hasOwnProperty("hasOwnProperty")) //false

console.log(mc2.__proto__.__proto__.hasOwnProperty("hasOwnProperty")) //true

console.log(mc2.__proto__.__proto__.__proto__) //null