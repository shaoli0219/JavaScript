// ES6 可以简化对象写法
let name = '张三';
let move = function () {
    console.log('奔跑')
};

const oldObj = {
    name: name,
    move: move,
    cry: function () {
        console.log('哭泣1')
    }
}

const newObj = {
    name,
    move,
    sing() {
        console.log('唱歌')
    }
}
console.log(oldObj)
console.log(newObj)