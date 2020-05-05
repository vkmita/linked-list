
/** A class representing a linked list */
export default class LinkedList {
  head: Node;

  constructor(values: Array<any>) {
    if (values.length === 0) return;

    let previousNode = new Node({ value: values.shift() });
    this.head = previousNode;
    
    while(values.length > 0) {
      const node = new Node({ value: values.shift() });
      previousNode.nextNode = node
      previousNode = node;
    }
  }

  toValueArray = (): Array<any> => {
    let node = this.head;
    const array = [];
    while(node) {
      array.push(node.value);
      node = node.nextNode;
    }
    return array;
  }

  /**
   * head -> node1 -> node2 -> node3 ->
   * <- head node1 -> node2 -> node3 ->
   * <- head <- node1 node2 -> node3 ->
   * <- head <- node1 <- node2 node3 ->
   */
  reverse = (): void => {
    const head = this.head;
    if (!head) return;

    let node1 = head.nextNode;
    if (!node1) return;
    head.nextNode = null;

    let node2 = node1.nextNode;
    node1.nextNode = head;

    while(node2) {
      const node3 = node2.nextNode;
      node2.nextNode = node1;

      if (!node3) {
        this.head = node2;
        return
      }
  
      node1 = node3;
      const tempNode2 = node3.nextNode;
      node1.nextNode = node2;
      node2 = tempNode2;
    }

    this.head = node1;
  }
}

/** A class representing a node of a linked list */
export class Node {
  value: any;
  nextNode?: Node;

  constructor({ value, nextNode }: { value: any, nextNode?: Node }) {
    this.value = value;
    this.nextNode = nextNode;
  }
}