class MusicGraph {
  nodos: string[];
  adyacencia: { [key: string]: string[] };

  constructor() {
    this.nodos = [];
    this.adyacencia = {};
  }

  addNode(cancion: string): void {
    if (!this.searchNode(cancion)) {
      this.nodos.push(cancion);
      this.adyacencia[cancion] = [];
    }
  }

  addEdge(cancionUno: string, cancionDos: string): void {
    this.addNode(cancionUno);
    this.addNode(cancionDos);

    if (!this.adyacencia[cancionUno].includes(cancionDos)) {
      this.adyacencia[cancionUno].push(cancionDos);
    }

    if (!this.adyacencia[cancionDos].includes(cancionUno)) {
      this.adyacencia[cancionDos].push(cancionUno);
    }
  }

  searchNode(cancion: string): boolean {
    return this.nodos.includes(cancion);
  }

  searchVertices(cancion: string): string[] {
    if (!this.adyacencia[cancion]) {
      return [];
    }

    return this.adyacencia[cancion];
  }

  print(): void {
    console.log(this.adyacencia);
  }
}

export default MusicGraph;
