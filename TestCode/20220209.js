function outer() {
    let count = 0
    return function () {
        count = count + 1
        return count
    }
}

let res = outer()
console.log(res())
console.log(res())
console.log(res())