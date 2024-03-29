/**
 * Array.prototype.reduce()
 *
 * reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 * 
 * 用法：
 * arr.reduce(callback(accumulator, currentValue,[index],[array]),[initialValue])
 * - accumulator 累计器
 * - currentValue 当前值
 * - currentIndex 当前索引
 * - array 数组
 * - initialValue accumulator的初始值
 * 
 * 注意：
 * - 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提
 * 供initialValue，从索引0开始。
 * 
 * reduce() 如何运行：
 * 
 * [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {return accumulator + currentValue}, 10)
 *  
 *      callback	        accumulator	    currentValue	currentIndex	array	            returnValue
 *      firstCall	        10	            0	            0	            [0, 1, 2, 3, 4]	    10
 *      secondCall	        10	            1	            1	            [0, 1, 2, 3, 4]	    11
 *      thirdCall	        11	            2	            2	            [0, 1, 2, 3, 4]	    13
 *      fourthCall	        13	            3	            3	            [0, 1, 2, 3, 4]	    16
 *      fifthCall	        16	            4	            4	            [0, 1, 2, 3, 4]	    20
 */

//demo1 数组求和
const array1 = [0, 1, 2, 3, 4];
const reducer = (accumulator, currentValue, ...rest) => accumulator + currentValue;
console.log(array1.reduce(reducer)); //expected output: 10
console.log(array1.reduce(reducer, 10)); //expected output: 20

//demo2 字符串处理
const files = ['foo.txt ', '.bar', '   ', 'baz.foo'];
const filePaths = files.reduce((acc, file) => {
    const fileName = file.trim();
    if (fileName) {
        const filePath = `~/cool_app/${fileName}`;
        acc.push(filePath);
    }
    return acc;
}, []);
console.log(filePaths); // [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo' ]