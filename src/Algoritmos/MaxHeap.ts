import type { Cancion } from "../Interfaces/Cancion.interface";

class MaxHeap {
  heap: Cancion[];

  constructor() {
    this.heap = [];
  }

  push(cancion: Cancion): void {
    this.heap.push(cancion);
    this.percolateUp();
  }

  pop(): Cancion | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const mayor = this.heap[0];
    const ultimo = this.heap.pop();

    if (ultimo) {
      this.heap[0] = ultimo;
      this.percolateDown();
    }

    return mayor;
  }

  peek(): Cancion | undefined {
    return this.heap[0];
  }

  heapify(canciones: Cancion[]): void {
    this.heap = [];

    canciones.forEach((cancion) => {
      this.push(cancion);
    });
  }

  percolateUp(): void {
    let indice = this.heap.length - 1;

    while (indice > 0) {
      const indicePadre = Math.floor((indice - 1) / 2);

      if (
        this.heap[indicePadre].reproducciones >=
        this.heap[indice].reproducciones
      ) {
        break;
      }

      this.swap(indicePadre, indice);
      indice = indicePadre;
    }
  }

  percolateDown(): void {
    let indice = 0;
    const largo = this.heap.length;

    while (true) {
      const hijoIzquierdo = indice * 2 + 1;
      const hijoDerecho = indice * 2 + 2;
      let indiceMayor = indice;

      if (
        hijoIzquierdo < largo &&
        this.heap[hijoIzquierdo].reproducciones >
          this.heap[indiceMayor].reproducciones
      ) {
        indiceMayor = hijoIzquierdo;
      }

      if (
        hijoDerecho < largo &&
        this.heap[hijoDerecho].reproducciones >
          this.heap[indiceMayor].reproducciones
      ) {
        indiceMayor = hijoDerecho;
      }

      if (indiceMayor === indice) {
        break;
      }

      this.swap(indice, indiceMayor);
      indice = indiceMayor;
    }
  }

  swap(indiceUno: number, indiceDos: number): void {
    const temporal = this.heap[indiceUno];
    this.heap[indiceUno] = this.heap[indiceDos];
    this.heap[indiceDos] = temporal;
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): Cancion[] {
    return this.heap;
  }

  print(): void {
    console.log(this.heap);
  }
}

export default MaxHeap;
