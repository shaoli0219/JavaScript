class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if (this.isEmpty())
            throw new Error('栈已空！')
        this.items.pop()
    }

    peek() {
        if (this.isEmpty())
            throw new Error('栈已空！')
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    toString() {
        return String(this.items)
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.peek())
console.log(stack.toString())

stack.pop()
stack.pop()
stack.pop()
console.log(stack.toString())
stack.pop()
