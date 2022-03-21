/**
 * Array.prototype.slice()
 *
 * 返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
 * 
 * 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被
 * 引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
 * 
 * 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修
 * 改这些字符串或数字或是布尔值，将不会影响另一个数组。
 */

const animals = ['ant', 'bison', 'camel', 'duck', 'element'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); // expected output: Array ["camel", "duck"]
console.log(animals); // expected output: Array ["camel", "duck"]
// 引用类型改变示例
let myHonda = {
    color: 'red',
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);

console.log('myCar = ' + JSON.stringify(myCar)); // myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,'cherry condition', 'purchased 1997']
console.log('newCar = ' + JSON.stringify(newCar)); // newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]

// 改变 myHonda 对象的 color 属性.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color); // The new color of my Honda is purple

//输出 myCar、newCar 中各自的 myHonda 对象引用的 color 属性。
console.log(' myCar[0].color = ' + myCar[0].color); // myCar[0].color = purple
console.log('newCar[0].color = ' + newCar[0].color); // newCar[0].color = purple