import type { Song } from "./types";

export class Node {
  value: Song;
  next: Node | null;

  constructor(value: Song) {
    this.value = value;
    this.next = null;
  }
}