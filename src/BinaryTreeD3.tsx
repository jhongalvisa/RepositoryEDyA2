import './BinaryTree.css'
import TreeNode from './TreeNode'
import Nodo from './Nodo'

interface BinaryTreeProps {
    raiz: Nodo | null
}

function BinaryTreeD3({ raiz }: BinaryTreeProps) {
    return (
        <div className="tree">
            <TreeNode node={raiz} />
        </div>
    )
}

export default BinaryTreeD3