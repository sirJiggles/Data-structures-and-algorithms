/*
*** Exercises:
1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
2. Sort a stack so that its elements are in ascending order.
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

class Stack {
  constructor() {
    this.max = 10
    // keep a ref to the index
    this.index = 0
    this.storage = {}
  }
  push(val) {
    if (this.index === this.max) {
      return "Max capacity already reached. Remove element before adding a new one."
    }
    this.storage[this.index + 1] = val
    this.index ++
  }
  pop() {
    delete this.storage[this.index]
    this.index --
  }
  size() {
    return this.index
  }
  contains(test) {
    return Object.values(this.storage)
                 .filter((val) => val === test)
                 .length >= 1;
  }
}

const test = new Stack('gareth')
test.push('rocks')
console.log(test.size());
console.log(test.storage);
test.push('some more');
console.log(test.size());
console.log(test.storage);
test.pop()
console.log(test.size());
console.log(test.storage);
console.log(test.size());
test.push('socks');
console.log(test.storage);
console.log(test.contains('rocks'));