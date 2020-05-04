
/** A class representing a linked list */
class LinkedList {
  head: LinkedListNode;

  constructor(head: LinkedListNode) {
    this.head = head;
  }
}

/** A class representing a node of a linked list */
class LinkedListNode {
  value: any;
  nextNode: LinkedListNode;

  constructor(value: any, nextNode: LinkedListNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}