import { NodeAtencion } from "./DoublyNodeAtencion";
import type { atencion } from "./DoublyNodeAtencion";

export class LinkedListAtencion {
  head: NodeAtencion | null;
  tail: NodeAtencion | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: atencion) {
    const newNode = new NodeAtencion(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}