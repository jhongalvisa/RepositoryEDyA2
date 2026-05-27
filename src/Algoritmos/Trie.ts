import TrieNode from "./TrieNode";

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }

  insert(palabra: string): void {
    let nodoActual = this.root;
    const letras = palabra.toLowerCase().split("");

    letras.forEach((letra) => {
      if (!nodoActual.hijos[letra]) {
        nodoActual.hijos[letra] = new TrieNode(letra);
      }

      nodoActual = nodoActual.hijos[letra];
    });

    nodoActual.isEndOfWord = true;
  }

  search(palabra: string): boolean {
    let nodoActual = this.root;
    const letras = palabra.toLowerCase().split("");

    for (let i = 0; i < letras.length; i++) {
      const letra = letras[i];

      if (!nodoActual.hijos[letra]) {
        return false;
      }

      nodoActual = nodoActual.hijos[letra];
    }

    return nodoActual.isEndOfWord;
  }

  buscarPorPrefijo(prefijo: string): string[] {
    let nodoActual = this.root;
    const letras = prefijo.toLowerCase().split("");

    for (let i = 0; i < letras.length; i++) {
      const letra = letras[i];

      if (!nodoActual.hijos[letra]) {
        return [];
      }

      nodoActual = nodoActual.hijos[letra];
    }

    const resultados: string[] = [];
    this.recolectarPalabras(nodoActual, prefijo.toLowerCase(), resultados);

    return resultados;
  }

  recolectarPalabras(nodo: TrieNode, palabra: string, resultados: string[]): void {
    if (nodo.isEndOfWord) {
      resultados.push(palabra);
    }

    Object.keys(nodo.hijos).forEach((letra) => {
      this.recolectarPalabras(nodo.hijos[letra], palabra + letra, resultados);
    });
  }
}

export default Trie;
