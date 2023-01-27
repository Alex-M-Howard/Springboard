/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    } 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head && !this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }

    let node = this.head
    while (node.next !== this.tail) {
      node = node.next;
    }
    
    let val = this.tail.val;
    this.tail = node;
    this.length -= 1;

    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head && !this.tail) {
      return null;
    }

    if (this.head === this.tail){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val
    }

    let val = this.head.val;
    this.head = this.head.next;
    this.length -= 1;

    return val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head, i=0;

    while (node) {
      if (i === idx) {
        return node.val;
      }
      i++;
      node = node.next;
    }

    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head, i=0;

    if(!this.head && !this.tail){
      this.push(val);
      return this.head;
    }

    while (node) {
      if (i === idx) {
        node.val = val;
        return node.val;
      }
      i++;
      node = node.next;
    }

    return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(!this.head && !this.val){
      this.push(val);

      return this.head;
    }

    if (idx === 0) {
      return this.unshift(val);
    }

    let node=this.head, i=0;

    while (node && i < idx-1) {
      node = node.next;
      i++;
    }

    if (!node) {
      return this.push(val);
    } else {

      if (node === this.tail) {
        return this.push(val);
      }
      let newNode = new Node(val);
      let beginning = node;
      let after = node.next;

      beginning.next = newNode;
      newNode.next = after;
      this.length += 1;
      return newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
     if (!this.head && !this.val) {
       return null;
     }

    if (idx === 0) {
      let val = this.head.val;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.length -= 1;
      return val;
     }

    
    
    
     let node = this.head,
       i = 0;

     while (node && i < idx-1) {
      node = node.next;
      i++; 
     }

    if (!node) {
      return null;
    } else {
       
      if (!node.next) {
        // No futher values!
        return null;
       }
       
       let val = node.next.val;
       node.next = node.next.next;
       this.length += 1;
      
       return val;
     }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head && !this.tail) {
      return 0;
    }

    let node = this.head, sum = 0, count = 0;

    while (node) {
      sum += node.val;
      count++;
      node = node.next;
    }

    return sum / count;
  }

  /** traverse(): console.log through list */

  traverse() {
    if (!this.head && !this.tail) {
      return null;
    } else {
      let node = this.head;
      
      while (node) {
        console.log(node.val);
        node = node.next;
      }
    }
  }
}

/** Doubly LinkedList */
class DoublyLinkedList {
constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    } 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head && !this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }

    let node = this.head
    while (node.next !== this.tail) {
      node = node.next;
    }
    
    let val = this.tail.val;
    this.tail = node;
    this.length -= 1;

    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head && !this.tail) {
      return null;
    }

    if (this.head === this.tail){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val
    }

    let val = this.head.val;
    this.head = this.head.next;
    this.length -= 1;

    return val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head, i=0;

    while (node) {
      if (i === idx) {
        return node.val;
      }
      i++;
      node = node.next;
    }

    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head, i=0;

    if(!this.head && !this.tail){
      this.push(val);
      return this.head;
    }

    while (node) {
      if (i === idx) {
        node.val = val;
        return node.val;
      }
      i++;
      node = node.next;
    }

    return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(!this.head && !this.val){
      this.push(val);

      return this.head;
    }

    if (idx === 0) {
      return this.unshift(val);
    }

    let node=this.head, i=0;

    while (node && i < idx-1) {
      node = node.next;
      i++;
    }

    if (!node) {
      return this.push(val);
    } else {

      if (node === this.tail) {
        return this.push(val);
      }
      let newNode = new Node(val);
      let beginning = node;
      let after = node.next;

      beginning.next = newNode;
      newNode.next = after;
      this.length += 1;
      return newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
     if (!this.head && !this.val) {
       return null;
     }

    if (idx === 0) {
      let val = this.head.val;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.length -= 1;
      return val;
     }

    
    
    
     let node = this.head,
       i = 0;

     while (node && i < idx-1) {
      node = node.next;
      i++; 
     }

    if (!node) {
      return null;
    } else {
       
      if (!node.next) {
        // No futher values!
        return null;
       }
       
       let val = node.next.val;
       node.next = node.next.next;
       this.length += 1;
      
       return val;
     }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head && !this.tail) {
      return 0;
    }

    let node = this.head, sum = 0, count = 0;

    while (node) {
      sum += node.val;
      count++;
      node = node.next;
    }

    return sum / count;
  }

  /** traverse(): console.log through list */

  traverse() {
    if (!this.head && !this.tail) {
      return null;
    } else {
      let node = this.head;
      
      while (node) {
        console.log(node.val);
        node = node.next;
      }
    }
  }
}

module.exports = LinkedList;
