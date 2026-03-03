import { DoubleNode } from "./DoublyNode";

export class DoublyLinkedList {
  head: DoubleNode | null;
  tail: DoubleNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: string) {
    const newNode = new DoubleNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    (this.tail as DoubleNode).next = newNode;

    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}