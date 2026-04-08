import type { Libro } from "./LibrosType";

export class StackLibros {
    items: Libro[];

    constructor() {
        this.items = [];
    }

    push(libro: Libro) {
        this.items.push(libro);
    }

    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print(): Libro[] {
        const arr = this.items.slice().reverse();
        return arr;
    }
}