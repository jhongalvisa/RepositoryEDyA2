import { useState } from 'react'
import Nodo from './Nodo'

interface MenuItemProps {
    nodo: Nodo
    onSelect: (nodo: Nodo) => void
}

function MenuItem({ nodo, onSelect }: MenuItemProps) {
    const [abierto, setAbierto] = useState(false)
    const tieneHijos = nodo.hijos.length > 0
    const manejarClick = () => {
        onSelect(nodo)
        if (tieneHijos) {
            setAbierto(!abierto)
        }
    }

    return (
        <li>  
            <div className="menu-item" onClick={manejarClick}>
                <span>{nodo.title}</span>
                {tieneHijos && <span>{abierto ? '-' : '+'}</span>}
            </div>

            {abierto && tieneHijos && (
                <ul className="submenu">
                    {nodo.hijos.map((hijo, index) => (
                        <MenuItem key={index} nodo={hijo} onSelect={onSelect} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default MenuItem