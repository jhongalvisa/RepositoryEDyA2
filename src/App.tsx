import { useEffect, useState } from 'react'
import arbolMenu from './data'
import Nodo from './Nodo'
import SidebarMenu from './SidebarMenu'
import './App.css'

function App() {
  const [seleccionado, setSeleccionado] = useState<Nodo | null>(null)
  useEffect(() => {
    console.log('DFS')
    arbolMenu.dfs()

    console.log('BFS')
    arbolMenu.bfs()
    }, [])

    return (

      <div className="app-container">
        <SidebarMenu raiz={arbolMenu.raiz} onSelect={setSeleccionado} />

        <div className="content">
          <h1>Challenge 09</h1>

          {seleccionado ? (
            <div>
              <h2>{seleccionado.title}</h2>
              <p><strong>Link:</strong> {seleccionado.link}</p>
              <p><strong>Component:</strong> {seleccionado.component}</p>
            </div>

            ) : (
              <p>Selecciona una opción del menú</p>
              )}
        </div>
      </div>
    )
}

export default App