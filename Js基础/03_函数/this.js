// 解析器在调用函数时每次都会向函数内部传递一个隐藏的参数
// 这个参数就是this this指向的是一个对象
// 这个对象我们称之为函数执行的上下文对象
// 根据函数调用方式的不同，this会指向不同的对象
// 1.以函数的形式调用时，this永远都是window
// 2.以方法的形式调用时，this就是调用的方法那个对象
// 3.以构造函数的形式调用时，this就是新创建的那个对象

// 1.隐藏参数this
function fun() {
    // console.log(this);
    console.log(this.name);
}
// fun();

// 2.this指向不同对象
var obj = {
    name: "孙悟空",
    sayName: fun
}

var obj2 = {
    name: "沙和尚",
    sayName: fun
}

// console.log(obj.sayName === fun)

obj.sayName()
obj2.sayName()
// fun();

var name = "全局名称"
fun()

// 3.this指向新创建的对象
// 创建一个Person构造函数

function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.sayName = function () {
        console.log("Hello，我是" + this.name + "我今年" + this.age + "岁了")
    }
}

var per1 = new Person("孙悟空", 18, "男")
per1.sayName()
var per2 = new Person("猪八戒", 28, "男")
per2.sayName()