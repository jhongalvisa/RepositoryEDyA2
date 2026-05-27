class TrieNode {
  valor: string;
  hijos: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor(valor: string) {
    this.valor = valor;
    this.hijos = {};
    this.isEndOfWord = false;
  }
}

export default TrieNode;
