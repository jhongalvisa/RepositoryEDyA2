import Nodo from "./Nodo"

interface TreeViewProps {
    nodo: Nodo
}

function TreeView({ nodo }: TreeViewProps) {
    return (
        <li className="tree-node">
            <div className="tree-label">
                <span className={`tree-icon ${nodo.tipo === "carpeta" ? "folder" : "file"}`}>
                    {nodo.tipo === "carpeta" ? "📁" : "📄"}
                </span>

                <span className="tree-name">{nodo.nombre}</span>
                <span className="tree-type">{nodo.tipo}</span>
                <span className="tree-owner">Creado por: {nodo.creadorEmail}</span>
            </div>

            {nodo.hijos.length > 0 && (
                <ul className="tree-children">
                    {nodo.hijos.map((hijo) => (
                        <TreeView key={hijo.id} nodo={hijo} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default TreeView