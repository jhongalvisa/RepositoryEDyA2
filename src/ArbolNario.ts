import Nodo from './Nodo'

class ArbolNario {
    raiz: Nodo | null

    constructor(raiz: Nodo | null = null) {
        this.raiz = raiz
    }

    dfs(nodo: Nodo | null = this.raiz): void {
        if (!nodo) return
        console.log(nodo.title)

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
                console.log(actual.title)
                for (const hijo of actual.hijos) {
                    cola.push(hijo)
                }
            }
        }
    }
}

export default ArbolNario