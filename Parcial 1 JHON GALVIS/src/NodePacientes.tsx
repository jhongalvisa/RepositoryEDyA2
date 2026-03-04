export type paciente = {
    id: number;
    nombre: string;
    edad: number;
};

export class NodePacientes {
    value: paciente;
    next: NodePacientes | null;

    constructor(value: paciente){
        this.value = value;
        this.next = null;
    }
}