import { useEffect, useState } from "react";

import { LinkedListAtencion } from "./DoublyLinkedAtencion";
import type { NodeAtencion } from "./DoublyNodeAtencion";
import type { atencion } from "./DoublyNodeAtencion";

import { LinkedListPacientes } from "./LinkedPacientes";
import type { paciente } from "./NodePacientes";
import type { NodePacientes } from "./NodePacientes";

import { LinkedListMedicos } from "./LinkedCircularMedicos";
import type { medico } from "./NodeMedicos";
import type { NodeMedicos } from "./NodeMedicos";

const DatosPrueba: paciente[] = [
    { id: 1, nombre: "Jhon", edad: 20 },
    { id: 2, nombre: "Juan", edad: 21 },
    { id: 3, nombre: "Sofia", edad: 18 },
    { id: 4, nombre: "Mariana", edad: 26 },
    { id: 5, nombre: "Carlos", edad: 30 },
    { id: 6, nombre: "Manuel", edad: 19 },
    { id: 7, nombre: "Eddy", edad: 24 },
    { id: 8, nombre: "Henry", edad: 30 },
];

const MedicosPrueba: medico[] = [
    { id: 1, nombre: "Dra. Ana", edad: 34, especialidad: "Urgencias" },
    { id: 2, nombre: "Dr. Luis", edad: 41, especialidad: "General" },
    { id: 3, nombre: "Dra. Sofia", edad: 29, especialidad: "Pediatría" },
    { id: 4, nombre: "Dra. Marina", edad: 35, especialidad: "Urgencias" },
    { id: 5, nombre: "Dr. Andrés", edad: 46, especialidad: "General" },
    { id: 6, nombre: "Dr. Juan", edad: 30, especialidad: "General" },
    { id: 7, nombre: "Dra. Martina", edad: 42, especialidad: "Pediatría" },
    { id: 8, nombre: "Dr. Joaquín", edad: 31, especialidad: "General" }
];

const historialAtenciones = new LinkedListAtencion();

const listaPacientes = new LinkedListPacientes();
for (let i = 0; i < DatosPrueba.length; i++) {
    listaPacientes.append(DatosPrueba[i]);
}

const listaMedicos = new LinkedListMedicos();
for (let i = 0; i < MedicosPrueba.length; i++) {
    listaMedicos.append(MedicosPrueba[i]);
}

export default function PacientesUI() {
    const [current, setCurrent] = useState<NodePacientes | null>(listaPacientes.head);

    const [medicoActual, setMedicoActual] = useState<NodeMedicos | null>(listaMedicos.head);

    const [currentAtencion, setCurrentAtencion] = useState<NodeAtencion | null>(historialAtenciones.head);

  useEffect(() => {
    const timer = setInterval(() => {
        setMedicoActual((prev) => {
            if (prev === null) return listaMedicos.head;
            if (prev.next !== null) return prev.next;
            return listaMedicos.head;
        });
    }, 10000);

    return () => {
        clearInterval(timer);
    };
}, []);


function siguientePaciente() {
    if (current === null) return;
    if (current.next === null) return;
    setCurrent(current.next);
}

  
function reiniciarPaciente() {
    setCurrent(listaPacientes.head);
}


function atender() {
    if (current === null) return;
    if (medicoActual === null) return;

    const pacienteAtendido = current.value;
    const medicoQueAtendio = medicoActual.value;
    const siguienteNodoPaciente = current.next;

    listaPacientes.remove(pacienteAtendido.id);


    const registro: atencion = {
        id: Date.now(),
        paciente: pacienteAtendido.nombre,
        medico: medicoQueAtendio.nombre,
        especialidad: medicoQueAtendio.especialidad,
    };

    historialAtenciones.append(registro);
    setCurrentAtencion(historialAtenciones.tail);

    if (medicoActual.next !== null) {
        setMedicoActual(medicoActual.next);
    } else {
        setMedicoActual(listaMedicos.head);
    }

    if (siguienteNodoPaciente !== null) {
        setCurrent(siguienteNodoPaciente);
    } else {
        setCurrent(listaPacientes.head);
    }
}


  function atrasHistorial() {
    if (currentAtencion === null) return;
    if (currentAtencion.prev === null) return;
    setCurrentAtencion(currentAtencion.prev);
}

  function adelanteHistorial() {
    if (currentAtencion === null) return;
    if (currentAtencion.next === null) return;
    setCurrentAtencion(currentAtencion.next);
}

  return (
    <div>
        <h1>Clínica San José</h1>

        <hr></hr>
    
        <h3>Pacientes Registrados</h3>

        <button onClick={siguientePaciente}>Siguiente</button>
        <button onClick={reiniciarPaciente}>Reiniciar</button>
        <button onClick={atender}>Atender</button>


        <h3>Médico Seleccionado</h3>

        {medicoActual === null ? (
            <div>No hay médicos</div>
        ) : (
            <div>{medicoActual.value.nombre} - {medicoActual.value.especialidad}</div>
        )}


        <h3>Paciente Seleccionado</h3>

        {current === null ? (
            <div>No hay pacientes</div>
        ) : (
            <div>{current.value.nombre} - {current.value.edad}</div>
        )}

        <hr/>

        <h3>Historial de Atenciones</h3>
        
        <button onClick={atrasHistorial}>Atrás</button>
        <button onClick={adelanteHistorial}>Adelante</button>

        {currentAtencion === null ? (
            <div>Aún no hay atenciones</div>
        ) : (
            <div>Paciente Atendido: {currentAtencion.value.paciente} — Por:{" "}
          {currentAtencion.value.medico} ({currentAtencion.value.especialidad})</div>
        )}

    </div>
  );
}