// 栈结构
class Stack {
    constructor() {
        this.items = []
    }

    // push(item) 压栈操作，往栈里面添加元素
    push(item) {
        this.items.push(item)
    }

    // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
    pop() {
        if (this.isEmpty())
            throw new Error('栈已空！')
        return this.items.pop()
    }

    // peek() 查看栈顶元素
    peek() {
        if (this.isEmpty())
            throw new Error('栈已空！')
        return this.items[this.items.length - 1]
    }

    // isEmpty() 判断栈是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // size() 获取栈中元素个数
    size() {
        return this.items.length
    }

    // toString() 返回以字符串形式的栈内元素数据
    toString() {
        return String(this.items)
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.peek())
console.log(stack.size())
console.log(stack.toString())

console.log(stack.pop())
console.log(stack.pop())
stack.pop()
stack.pop()
console.log(stack.toString())
stack.pop()
