import { useState } from "react";
import { DoublyCircularComite } from "./DoublyLinkedCircularComite";
import type { comite } from "./DoublyNodeComite";
import type { NodeComite } from "./DoublyNodeComite";

const MiembrosPrueba: comite[] = [
    { id: 1, miembro: "Laura" },
    { id: 2, miembro: "Andrés" },
    { id: 3, miembro: "Sofía" },
    { id: 4, miembro: "Camilo" },
    { id: 5, miembro: "Valentina" }
];

const listaComite = new DoublyCircularComite();
for (let i = 0; i < MiembrosPrueba.length; i++) {
    listaComite.append(MiembrosPrueba[i]);
}

export default function ComiteUI() {
    const [current, setCurrent] = useState<NodeComite | null>(listaComite.head);

    function adelante() {
        if (current === null) return;
        if (current.next === null) return;
        setCurrent(current.next);
    }

    function atras() {
        if (current === null) return;
        if (current.prev === null) return;
        setCurrent(current.prev);
    }

    return (
        <div>
            <h2>Comité Administrativo</h2>
            <p>Total miembros: {listaComite.size()}</p>
            <button onClick={atras}>Atrás</button>
            <button onClick={adelante}>Adelante</button>

            <h3>Miembro</h3>
            {current === null ? (
                <div>No hay miembros</div>
            ) : (
                <div>{current.value.miembro} (id: {current.value.id})</div>)}
        </div>
    );
}