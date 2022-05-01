const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;    
  }

  getUnderlyingList() {
    return recursiveGetList(this.head);
    function recursiveGetList(node) {
      if (!node) {
        return {}
      } else if (!node.next) {
        return {"value" : node.value, "next": node.next}
      } else {
        return {"value": node.value, "next": recursiveGetList(node.next)};
      }
    }
  }

  enqueue( value ) {


    if (this.tail) {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    } else {
      this.head = this.tail = new ListNode(value);
      
    }    
  }

  dequeue() {
    if (this.head) {
      let prevHead = this.head;
      this.head = this.head.next;
      return prevHead.value;
    }    
  }
}


// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.getUnderlyingList())

module.exports = {
  Queue
};
