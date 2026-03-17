import type { Persona } from "./PersonaType";
import { PersonasQueue } from "./PersonasQueue";
import { useState } from "react";

const PersonasPrueba: Persona[] = [
    {nombre: "Jhon Galvis", monto: 20000000, fecha: new Date("2026-03-14")},
    {nombre: "Esteban Torres", monto: 15000000, fecha: new Date("2026-03-15")},
    {nombre: "Juan Hurtado", monto: 10000000, fecha: new Date("2026-03-16")},
    {nombre: "Alejandro Lara", monto: 5000000, fecha: new Date("2026-03-17")}
]

function generarFechaRandom(): Date {
    const hoy = new Date();
    const hace30Dias = new Date();
    hace30Dias.setDate(hoy.getDate() - 30)

    const inicio = hace30Dias.getTime();
    const fin = hoy.getTime();

    return new Date(inicio + Math.random() * (fin - inicio));
}

const queue =  new PersonasQueue(); 
for (let i = 0; i < PersonasPrueba.length; i++) {
    queue.enqueue(PersonasPrueba[i]);
}


export default function PersonaATMUI() {
    const [personaATMUI, setPersonaATMUI] = useState<Persona[]>([...queue.items]);

    const [nombre, setNombre] = useState(""); 
    const [monto, setMonto] = useState("");


    function agregarPersonaATM() {
        const PersonaNueva: Persona = {nombre, monto: Number(monto), fecha: generarFechaRandom()};

        queue.enqueue(PersonaNueva);
        setPersonaATMUI([...queue.items]);

        setNombre("");
        setMonto("");
    }

    const personasOrdenadas = [...personaATMUI].sort(
        (a, b) => a.fecha.getTime() - b.fecha.getTime()
    );

    return (
        <>
        <div>
            <h1>Cajero ATM</h1>

            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre"/>
            <input value={monto} onChange={(e) => setMonto(e.target.value)} placeholder="Monto"/>

            <button onClick={agregarPersonaATM}>Agregar Persona ATM</button>

            <hr/>

            <h2>Cola de Personas</h2>

            {personasOrdenadas.map((persona, index) => (
                <div key={index}>
                    <p><strong>Nombre:</strong> {persona.nombre}</p>
                    <p><strong>Monto:</strong>${persona.monto.toLocaleString()}</p>
                    <p><strong>Fecha de llegada:</strong>{persona.fecha.toLocaleDateString()}</p>
                    <hr/>
                </div>
            ))}
        </div>
        </>
    );
}