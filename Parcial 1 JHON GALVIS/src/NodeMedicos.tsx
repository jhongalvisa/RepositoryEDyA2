export type medico = {
    id: number;
    nombre: string;
    edad: number;
    especialidad: string;
};

export class NodeMedicos {
    value: medico;
    next: NodeMedicos | null;

    constructor(value: medico){
        this.value = value;
        this.next = null;
    }
}