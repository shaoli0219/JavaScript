// 队列数据结构
class Queue {
    constructor() {
        this.items = []
    }

    // 入队
    enqueue(item) {
        this.items.push(item);
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("队列为空!");
        }
        this.items.shift();
    }

    // 返回队首元素
    front() {
        if (this.isEmpty()) {
            throw new Error("队列为空!");
        }
        return this.items[0];
    }

    // 队列是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 队列的长度
    size() {
        return this.items.length;
    }

    // 显示所有队列元素
    toString() {
        return String(this.items)
    }
}

const queue = new Queue();

// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.items); //--> ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d