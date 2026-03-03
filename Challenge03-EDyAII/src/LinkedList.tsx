import { Node } from "./LinkedNode";
import type { Song } from "./types";

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: Song) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      (this.tail as Node).next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}