import './BinaryTree.css'
import TreeNode from './TreeNode'

interface NodoArbol {
  valor: number
  izquierda: NodoArbol | null
  derecha: NodoArbol | null
}

interface BinaryTreeProps {
  raiz: NodoArbol | null
}

function BinaryTreeD3({ raiz }: BinaryTreeProps) {
  return (
    <div className="tree">
      <TreeNode node={raiz} />
    </div>
  )
}

export default BinaryTreeD3