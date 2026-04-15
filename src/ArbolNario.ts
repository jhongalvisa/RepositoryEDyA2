import Nodo from "./Nodo";

class ArbolNario {
    raiz: Nodo | null

    constructor(raiz: Nodo | null = null) {
        this.raiz = raiz;
    }

    buscarPorId(id: string, nodo:Nodo | null = this.raiz): Nodo | null {
        if (!nodo) return null

        if (nodo.id === id) return nodo

        for (const hijo of nodo.hijos) {
            const encontrado = this.buscarPorId(id, hijo)
            if (encontrado) return encontrado;
        }
        return null;
    }

    insertar(parentId: string, nuevoNodo: Nodo): boolean {
        const padre = this.buscarPorId(parentId)

        if (!padre) return false
        if (padre.tipo === "archivo") return false;

        padre.agregarHijo(nuevoNodo)
        return true;
    }

    dfs(nodo: Nodo | null = this.raiz): void {
        if (!nodo) return
        console.log(nodo.nombre, nodo.tipo)

        for (const hijo of nodo.hijos) {
            this.dfs(hijo)
        }
    }

    bfs(): void {
        if (!this.raiz) return
        const cola: Nodo[] = [this.raiz]

        while (cola.length > 0) {
            const actual = cola.shift()
            if (actual) {
                console.log(actual.nombre, actual.tipo)
                for (const hijo of actual.hijos) {
                    cola.push(hijo)
                }
            }
        }
    }
}

export default ArbolNario;