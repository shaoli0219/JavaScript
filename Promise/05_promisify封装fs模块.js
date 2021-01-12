/**
 * util.promisify方法
 * 传入一个遵循常见的错误优先的回调风格的函数，并返回一个返回promise的版本
 */
// 引入 util 模块
const util = require('util')
// 引入 fs 模块
const fs = require('fs')
// 返回一个新函数
let mineReadFile = util.promisify(fs.readFile)

mineReadFile("./resource/content.txt").then(res => {
    console.log(res.toString())
})