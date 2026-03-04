import { NodeComite } from "./DoublyNodeComite";
import type { comite } from "./DoublyNodeComite";

export class DoublyCircularComite {
  head: NodeComite | null;
  tail: NodeComite | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: comite) {
    const newNode = new NodeComite(value);

    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;

        newNode.next = newNode;
        newNode.prev = newNode;

        this.length++;
        return;
    }

    newNode.prev = this.tail;
    newNode.next = this.head;

    if (this.tail) this.tail.next = newNode;
    if (this.head) this.head.prev = newNode;

    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}