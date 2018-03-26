/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */

class Queue {
  constructor() {
    this.head = 0
    this.tail = 0
    this.max = 10
    this.storage = {}
  }
  enqueue(val) {
    if (this.count() === this.max) {
      return 'Error: max queue size reached'
    }
    this.storage[this.head] = val
    return this.head ++
  }
  dequeue() {
    // nothing to remove?
    if (!this.storage[this.tail]) {
      return
    }
    delete this.storage[this.tail]
    this.tail ++
  }
  peek() {
    return this.storage[this.tail]
  }
  count() {
    return Object.values(this.storage).length
  }
  contains(value) {
    return Object.values(this.storage)
                 .some((curr) => {
                   return (curr === value)
                 })
  }
  until(value) {
    const until = Object.values(this.storage).indexOf(value)
    return (until !== -1) ? until + 1 : false
  }
}

let q = new Queue()
q.enqueue(3)
q.enqueue(4)
q.enqueue(7)
q.enqueue(4)

// q.dequeue()
// q.dequeue()

console.log(q.peek());
console.log(q.contains(3));

console.log(q.until(7));


console.log(q.storage);
console.log(q.count());








/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
 */