export type atencion = {
  id: number;
  paciente: string;
  medico: string;
  especialidad: string;
};

export class NodeAtencion {
  value: atencion;
  next: NodeAtencion | null;
  prev: NodeAtencion | null;

  constructor(value: atencion) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}