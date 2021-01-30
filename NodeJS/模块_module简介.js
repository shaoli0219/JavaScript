/**
 * NodeJS
 *
 *  - 在Node中，一个js文件就是一个模块
 *  - 在Node中，每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
 *  - 可以通过exports向外部暴露变量和方法，只需要将方法或变量设置为exports的属性即可
 *  - 在Node中，通过require()函数类引入外部的模块
 *  - 使用require()引入模块后，该函数会返回一个对象，这个对象代表引入的模块
 *  - 我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
 *  - 模块分为两大类
 *      核心模块
 *          - 由node引擎提供的模块
 *          - 核心模块的标识就是模块的名字
 *      文件模块
 *          - 由用户自己创建
 *          - 文件标识就是文件的路径
 *  - 在Node中有一个全局对象global，它的作用和浏览器中的window类似
 *  - 实际上模块中的代码都是包装在一个函数中执行的function (exports, require, module, __filename, __dirname) {}，并且在函数执行时传递了5个实参
 *      exprots
 *          - 该对象用来将变量或函数暴露到外部
 *      require
 *          - 函数，引入外部模块
 *      module
 *          - 代表当前模块本身
 *          - exports就是module的属性
 *      __filename
 *          - 当前模块的完整路径
 *      __dirname
 *          - 当前模块所在文件夹的路径
 */

// var md = require('./module.js');
// console.log(md);

// var math = require('./math');
// console.log(math.add(123, 456));

// var fs = require('fs');
// console.log(fs)

// var a = 10;
// console.log(global.a)

// a = 10;
// console.log(global.a)

// console.log(arguments) //有内容表示这是运行在函数中
// console.log(arguments.callee + "") // function (exports, require, module, __filename, __dirname) {}
// console.log(arguments.length)//5

// console.log(exports);
// console.log(exports == module.exports);

// console.log(__filename); //d:\JavaScript\NodeJS\模块_module简介.js
// console.log(__dirname); //d:\JavaScript\NodeJS