import Nodo from './Nodo'
import MenuItem from './MenuItem'

interface SidebarMenuProps {
    raiz: Nodo | null
    onSelect: (nodo: Nodo) => void
}

function SidebarMenu({ raiz, onSelect }: SidebarMenuProps) {
    if (!raiz) return null

    return (
        <div className="sidebar">
            <h2>{raiz.title}</h2>

            <ul className="menu-list">
                {raiz.hijos.map((hijo, index) => (
                    <MenuItem
                        key={index}
                        nodo={hijo}
                        onSelect={onSelect}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SidebarMenu