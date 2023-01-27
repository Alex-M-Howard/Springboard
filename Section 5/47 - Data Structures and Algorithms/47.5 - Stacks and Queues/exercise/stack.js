/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    
    if (!this.first && !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size += 1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first && !this.last) {
      throw new Error('Stack is empty. Pop failed.')
    }

    let returnVal = this.first.val;
    this.size -= 1;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      let node = this.first;

      while (node.next !== this.last) {
        node = node.next
      }

      this.last = node;
    }

    return returnVal;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first && !this.last) {
      return null;
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.first && !this.last ? true : false;
  }
}

module.exports = Stack;
