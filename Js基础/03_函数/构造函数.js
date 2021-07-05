/**
 * 构造函数
 * 
 *      构造函数的创建方式和普通函数一样，但是构造函数命名习惯首字母大写
 *      构造函数配合关键字 new 使用，普通函数直接调用
 * 
 * 执行流程
 * 
 *      1、立即创建一个新的对象
 *      2、将新建的对象设置为函数中的this,在构造函数中只能用this引用新建的对象
 *      3、逐行执行函数中的代码
 *      4、将新建的对象作为返回值返回
 * 
 * 使用同一个构造函数创建的对象，称之为一类对象，也将一个构造函数称为一个类，创建出来的对象称为实例
 * 
 */

// 创建一个构造函数Person
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        console.log('My name is ' + this.name);
    }
}

// 创建一个Dog类
function Dog() { }
let dog = new Dog();

// 当成普通函数调用
let per1 = Person();
console.log(per1); // undefined
// 当成构造函数调用
let per2 = new Person();
console.log(per2); // Person {}

var person1 = new Person('vencet', 18, '男');
person1.sayName(); // My name is vencent

/**
 * instanceof
 * 
 * 检查一个对象是否是一个类的实例
 */

console.log(person1 instanceof Person);// true