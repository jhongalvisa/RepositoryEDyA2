import { useEffect } from 'react'
import arbol from './data'
import BinaryTreeD3 from './BinaryTreeD3'

interface NodoArbol {
  valor: number
  izquierda: NodoArbol | null
  derecha: NodoArbol | null
}

function preorden(nodo: NodoArbol | null): void {
  if (!nodo) return
  console.log(nodo.valor)
  preorden(nodo.izquierda)
  preorden(nodo.derecha)
}

function inorden(nodo: NodoArbol | null): void {
  if (!nodo) return
  inorden(nodo.izquierda)
  console.log(nodo.valor)
  inorden(nodo.derecha)
}

function postorden(nodo: NodoArbol | null): void {
  if (!nodo) return
  postorden(nodo.izquierda)
  postorden(nodo.derecha)
  console.log(nodo.valor)
}

function contiene(nodo: NodoArbol | null, valorBuscado: number): boolean {
  if (!nodo) return false

  if (nodo.valor === valorBuscado) {
    return true
  }

  return contiene(nodo.izquierda, valorBuscado) || contiene(nodo.derecha, valorBuscado)
}

function App() {
  useEffect(() => {
    console.log('INORDEN')
    inorden(arbol)

    console.log('POSTORDEN')
    postorden(arbol)

    console.log('PREORDEN')
    preorden(arbol)

    console.log('¿Está 7 en el árbol?', contiene(arbol, 7))
    console.log('¿Está 100 en el árbol?', contiene(arbol, 100))
    console.log('¿Está 20 en el árbol?', contiene(arbol, 20))
    console.log('¿Está 8 en el árbol?', contiene(arbol, 8))
  }, [])

  return (
    <div>
      <h1>Árbol Binario</h1>
      <BinaryTreeD3 raiz={arbol} />
    </div>
  )
}

export default App