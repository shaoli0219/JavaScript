function outer() {
    let count = 0
    return function () {
        count = count + 1
        return count
    }
}

let res = outer()
console.log(res()) // 1
console.log(res()) // 2
console.log(res()) // 3