/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        // 读取文件
        const fs = require('fs').readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        });

    })
}

mineReadFile("./resource/content.txt").then(res => {
    console.log(res.toString())
}, err => {
    console.log(err)
})