import type { Producto } from "./Producto";
import { MinHeap } from "./MinHeap";
import { TrieNode } from "./TrieNode";

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  insert(name: string, popularity: number): void {
    const productName = name.trim().toLowerCase();

    if (productName.length === 0) {
      return;
    }

    let current = this.root;

    for (const character of productName) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieNode(character);
      }

      current = current.children[character];
    }

    current.isEndOfWord = true;
    current.product = {
      name: productName,
      popularity,
    };
  }

  search(word: string): boolean {
    const node = this.getNode(word);

    if (node === null) {
      return false;
    }

    return node.isEndOfWord;
  }

  searchByPrefix(prefix: string): Producto[] {
    const node = this.getNode(prefix);

    if (node === null) {
      return [];
    }

    const products: Producto[] = [];

    this.collectProducts(node, products);

    return products;
  }

  searchTopK(prefix: string, k: number): Producto[] {
    if (k <= 0) {
      return [];
    }

    const products = this.searchByPrefix(prefix);
    const heap = new MinHeap();

    for (const product of products) {
      heap.push(product);

      if (heap.size() > k) {
        heap.pop();
      }
    }

    return heap.toArray().sort((a, b) => b.popularity - a.popularity);
  }

  private getNode(text: string): TrieNode | null {
    const normalizedText = text.trim().toLowerCase();

    let current = this.root;

    for (const character of normalizedText) {
      if (current.children[character] === undefined) {
        return null;
      }

      current = current.children[character];
    }

    return current;
  }

  private collectProducts(node: TrieNode, products: Producto[]): void {
    if (node.isEndOfWord && node.product !== null) {
      products.push(node.product);
    }

    for (const child of Object.values(node.children)) {
      this.collectProducts(child, products);
    }
  }
}