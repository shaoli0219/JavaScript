/**
 * 读取1.txt 2.txt 3.txt文件中的内容并在控制台输出
 */

const fs = require('fs')
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

// 回调方法

// fs.readFile("./resource/1.txt", (err, data1) => {
//     if (err) {
//         throw err
//     }
//     fs.readFile("./resource/2.txt", (err, data2) => {
//         if (err) {
//             throw err
//         }
//         fs.readFile("./resource/3.txt", (err, data3) => {
//             if (err) {
//                 throw err
//             }
//             console.log(data1 + data2 + data3)
//         })
//     })
// })

//async 与 await 方法
async function readFile() {
    try {
        let p1 = await mineReadFile("./resource/1.txt")
        let p2 = await mineReadFile("./resource/2.txt")
        let p3 = await mineReadFile("./resource/3.txt")
        console.log(p1 + p2 + p3)
    } catch (e) {
        console.log(e.log)
    }
}
readFile()