const fs = require('fs')

//回调函数形式
// fs.readFile('Promise/resource/content.txt', (err, data) => {
//     if (err) throw err
//     console.log(data.toString())
// })

//promise形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        //如果失败
        if (err) reject(err)
        //如果成功
        resolve(data)
    })
})

// 调用then
p.then(res => {
    console.log(res.toString())
}, err => {
    console.log(err)
})