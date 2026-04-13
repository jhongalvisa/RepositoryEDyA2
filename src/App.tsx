import { useEffect } from 'react'
import arbol from './data'
import BinaryTreeD3 from './BinaryTreeD3'

function App() {
  useEffect(() => {
    console.log('INORDEN')
    arbol.inorden(arbol.raiz)

    console.log('POSTORDEN')
    arbol.postorden(arbol.raiz)

    console.log('PREORDEN')
    arbol.preorden(arbol.raiz)

    console.log('¿Está 40 en el árbol?', arbol.contiene(40))
    console.log('¿Está 90 en el árbol?', arbol.contiene(90))
    console.log('¿Está 45 en el árbol?', arbol.contiene(45))
    console.log('¿Está 20 en el árbol?', arbol.contiene(20))
  }, [])

  return (
    <div>
      <h1>Árbol Binario</h1>
      <BinaryTreeD3 raiz={arbol.raiz} />
    </div>
  )
}

export default App