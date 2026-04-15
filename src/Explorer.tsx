import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import Nodo from "./Nodo"
import ArbolNario from "./ArbolNario"
import TreeView from "./TreeView"
import crearArbolInicial from "./data"
import useAuth from "./useAuth"

function Explorer() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const [arbol, setArbol] = useState(crearArbolInicial)
    const [nombre, setNombre] = useState("")
    const [tipo, setTipo] = useState<"carpeta" | "archivo">("carpeta")
    const [parentId, setParentId] = useState("root")

    const carpetas = useMemo(() => {
    const resultado: Nodo[] = []

    const recorrer = (nodo: Nodo | null) => {
        if (!nodo) return

        if (nodo.tipo === "carpeta") {
            resultado.push(nodo)
        }

        for (const hijo of nodo.hijos) {
            recorrer(hijo)
        }
    }

    recorrer(arbol.raiz)
    return resultado
    }, [arbol])

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    const handleCrear = () => {
        if (!nombre.trim()) {
            alert("Escribe un nombre")
            return
        }

    const nuevoNodo = new Nodo(
        Date.now().toString(),
        nombre,
        tipo,
        user?.email || "sin-correo"
    )

    const nuevoArbol = new ArbolNario(arbol.raiz)
    const insertado = nuevoArbol.insertar(parentId, nuevoNodo)

    if (!insertado) {
        alert("No se pudo insertar. Revisa que el padre sea una carpeta.")
        return
    }

    setArbol(new ArbolNario(nuevoArbol.raiz))
    setNombre("")
    setTipo("carpeta")
    setParentId("root")
  }

  return (
    <div className="explorer-page">
        <div className="explorer-container">
          <div className="explorer-header">
            <div>
                <h1 className="explorer-title">Explorador de Archivos</h1>
                <p className="explorer-user">Usuario actual: {user?.email}</p>
            </div>

            <button className="logout-button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>

        <div className="explorer-grid">
          <div className="panel">
            <h2 className="panel-title">Crear carpeta o archivo</h2>
            <p className="panel-subtitle">
              Solo una carpeta puede contener hijos.
            </p>

            <div className="create-form">
              <div>
                <label className="form-label">Nombre</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ej: Parcial 2.docx"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Tipo</label>
                <select
                  className="form-select"
                  value={tipo}
                  onChange={(e) =>
                    setTipo(e.target.value as "carpeta" | "archivo")
                  }
                >
                  <option value="carpeta">Carpeta</option>
                  <option value="archivo">Archivo</option>
                </select>
              </div>

              <div>
                <label className="form-label">Carpeta padre</label>
                <select
                  className="form-select"
                  value={parentId}
                  onChange={(e) => setParentId(e.target.value)}
                >
                  {carpetas.map((carpeta) => (
                    <option key={carpeta.id} value={carpeta.id}>
                      {carpeta.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <button className="create-button" onClick={handleCrear}>
                Crear elemento
              </button>
            </div>

            <div className="info-box">
              El sistema valida que un archivo no puede tener hijos, mientras
              que una carpeta sí.
            </div>
          </div>

          <div className="panel">
            <h2 className="panel-title">Estructura jerárquica</h2>
            <p className="panel-subtitle">
              Visualización del árbol n-ario de carpetas y archivos.
            </p>

            <div className="tree-wrapper">
              {arbol.raiz && (
                <ul className="tree-root">
                  <TreeView nodo={arbol.raiz} />
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explorer