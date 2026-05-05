import type { Producto } from "./Producto";

export class TrieNode {
    value: string | null;
    isEndOfWord: boolean;
    children: Record<string, TrieNode>;
    product: Producto | null;

    constructor(value: string | null) {
        this.value = value;
        this.isEndOfWord = false;
        this.children = {};
        this.product = null;
    }
}

