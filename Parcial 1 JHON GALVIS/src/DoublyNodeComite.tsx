export type comite = {
    id: number;
    miembro: string;
}

export class NodeComite {
    value: comite;
    next: NodeComite | null;
    prev: NodeComite | null;

    constructor(value: comite){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}