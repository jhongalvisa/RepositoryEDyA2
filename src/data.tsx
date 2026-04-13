import ArbolBinario from "./ArbolBinario";

const arbol = new ArbolBinario()

const numeros: number[] = [50, 30, 70, 20, 40, 60, 80]

for (let i = 0; i < numeros.length; i++) {
    arbol.insertar(numeros[i])
}

export default arbol;