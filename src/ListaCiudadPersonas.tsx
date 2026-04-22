import type { Ciudad } from "./Ciudad";
import type { Persona } from "./Persona";

interface Props {
    ciudad: Ciudad;
    personas: Persona[];
}

function ListaCiudadPersonas({ ciudad, personas }: Props) {
    return(
        <div>
            <h2>Personas que viven en {ciudad.nombre}</h2>

            {personas.length === 0 ? (
                <p>No hay personas en esta ciudad.</p>
            ):(
                <ul>
                    {personas.map((persona) => (
                        <li key={persona.id}>
                            {persona.nombre} - {persona.edad} años
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaCiudadPersonas