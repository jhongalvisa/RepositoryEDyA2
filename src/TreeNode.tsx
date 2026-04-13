import Nodo from './Nodo'

interface TreeNodeProps {
  node: Nodo | null
}

function TreeNode({ node }: TreeNodeProps) {
  if (!node) return null

  return (
    <div className="node-container">
      <div className="node">{node.valor}</div>

      <div className="children">
        <TreeNode node={node.izquierda} />
        <TreeNode node={node.derecha} />
      </div>
    </div>
  )
}

export default TreeNode