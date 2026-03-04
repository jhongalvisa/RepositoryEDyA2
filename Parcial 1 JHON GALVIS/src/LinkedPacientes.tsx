import { NodePacientes } from "./NodePacientes";
import type { paciente } from "./NodePacientes";

export class LinkedListPacientes {
  head: NodePacientes | null;
  tail: NodePacientes | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: paciente) {
    const newNode = new NodePacientes(value);

    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return;
    }

    if (this.tail !== null) {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  remove(id: number): void {
    if (this.head === null) return;

    if (this.head.value.id === id) {
        this.head = this.head.next;
        this.length--;

        if (this.head === null) {
            this.tail = null;
        }
        return;
    }

    let current = this.head;

    while (current.next !== null && current.next.value.id !== id) {
        current = current.next;
    }

    if (current.next === null) return;

    current.next = current.next.next;
    this.length--;

    if (current.next === null) {
        this.tail = current;
    }
  }

  print(): paciente[] {
    const arr: paciente[] = [];
    let current = this.head;

    while (current !== null) {
        arr.push(current.value);
        current = current.next;
    }

    return arr;
  }

  size() {
    return this.length;
  }
}