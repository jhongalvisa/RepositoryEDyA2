export class DoubleNode {
  value: string;
  next: DoubleNode | null;
  prev: DoubleNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}