function fun(a, b) {
    // console.log("fun函数执行")
    // console.log(this.name)
    console.log("a=" + a + ", b=" + b)
}

// fun()

/**
 * - call()和apply()方法都是函数对象方法，需要通过函数对象来调用
 * - 对函数调用call()和apply()都会执行调用函数
 * - 调用call()和apply()可以将第一个对象指定为第一个参数,此时这个对象将会成为函数执行时的this
 * 
 */

/**
 * this的情况：
 *      1.以函数形式调用时，this永远都是window
 *      2.以方法形式调用时，this是调用方法的对象
 *      3.以构造函数的形式调用时，this是新创建的那个对象
 *      4.使用call和apply调用时，this是指定的那个对象
 */

var obj = {
    name: "obj",
    sayName: function () {
        console.log(this.name)
    }
}

var obj2 = {
    name: "obj2"
}

// fun.call()
// fun.apply()

// fun.call(obj)
// fun.apply(obj2)

// obj.sayName.apply(obj2)

fun.call(obj)
/**
 * call和apply传参方式
 */
fun.call(obj, 2, 3)
fun.apply(obj, [2, 3])