/*

Concept:

Queue operates on "FIFO" first in first out, the in is "enqueued" and the out is
refered to as "dequeued"

an example:

enqueue(1) -- [1]
enqueue(2) -- [1, 2]
dequeue() --- [2]
enqueue(3) -- [2, 3]
enqueue(5) -- [2, 3, 5]
dequeue() --- [3, 5]

only take from front, and can only put on the back

INTERFACE

protocol Queue {
  storage: any
  enqueue(value: any) -> void
  dequeue() -> void
  size() -> int // size of the queue
}

*/

