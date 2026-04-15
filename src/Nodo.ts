class Nodo {
    id: string
    nombre: string
    tipo: "carpeta" | "archivo"
    creadorEmail: string
    hijos: Nodo[]

    constructor(id: string, nombre: string, tipo: "carpeta" | "archivo", creadorEmail: string) {
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.creadorEmail = creadorEmail
        this.hijos = []
    }

    agregarHijo(nodo: Nodo): void {
        if (this.tipo === "archivo") {
            throw new Error("Un archivo no puede tener hijos");
        }

        this.hijos.push(nodo);
    }
}

export default Nodo;