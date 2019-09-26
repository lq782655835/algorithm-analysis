function LinkedList() {
    // 链表节点数据结构
    let Node = function(element) {
        this.element = element
        this.next = null // 下个node的引用（在js语言中，类已经是引用类型了）
    }

    // head是入口，可以直到以后所有node
    this.head = null
    this.length = 0

    this.append = function(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
            this.length++
            return
        }

        let currentNode = this.head
        // 循环列表，直到找到最后一项
        // 线性查找，直到找到最后的node。算法复杂度：O(n)
        while(currentNode.next) {
            currentNode = currentNode.next
        }
        // 最后一项，将其next赋值为node
        currentNode.next = node // 最后的节点.next 赋值为新增的node节点
        this.length++
    }
}

let list = new LinkedList()
list.append(10)
list.append(15)