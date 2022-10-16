class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head)
    this.node = newNode;
    length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList;
