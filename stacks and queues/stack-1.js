/*
Stacks are "LIFO" Last Item In First item out and we use push and pop
it is an array and the only thing you can do is push and pop. like a deck of
cards, we can add items to the stack, we can only take the top one off
you cant just take one from the middle.

an example is the "Call stack"


function doThing(one) {
  if one {
    doAnotherThing(false)
  } else {
    doLastThing()
  }
}

function doAnotherThing(split) {
  if split {
    doLastThing()
  } else {
    doUnreatedThing()
  }
}

If we where to call something like
doThing(true)

the call stack would look like:
0 - doThing()
1 - doAnotherThing()
2 - doUnreatedThing()

so it is the order of functions in this example that are being executed as you
go down the rabbit hole, one frame in the stack is one index in the stack


STACK INTERFACE
protocol Stack {
  storage: string // (on constructor)
  func push(value: string)
  func pop()
  func size() -> int // (stack size)
}

here is a stack implemented as requested by the course. need to implement
interface based on a storage string
*/
class Stack {
  constructor(initialValue = '') {
    this.storage = initialValue
  }
  push(val) {
    this.storage = `${this.storage},${val}`
  }
  pop() {
    const parts = this.storage.split(',');
    this.storage = parts.slice(0, parts.length - 1).join(',')
  }
  size() {
    return this.storage.split(',').length
  }
}

const test = new Stack('gareth')
test.push('rocks')
console.log('------------------------------------');
console.log(test.size());
console.log(test.storage);
console.log('------------------------------------');
test.push('some more');
console.log(test.size());
console.log(test.storage);
test.pop()
console.log('------------------------------------');
console.log(test.size());
console.log(test.storage);
console.log('------------------------------------');
