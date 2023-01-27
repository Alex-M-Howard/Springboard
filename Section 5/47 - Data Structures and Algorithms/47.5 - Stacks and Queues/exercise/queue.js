/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first && !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    
    return undefined;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first && !this.last) {
      throw new Error('Nothing in queue. Dequeue failed.')
    }

    let node = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else if(this.first.next === this.last){
      this.first = this.last; 
    } else {
      this.first = this.first.next;
    }

    this.size -= 1;
    return node.val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first && !this.last) {
      return null;
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (!this.first && !this.last) ? true : false;
  }
}

module.exports = Queue;
