class Nodo {
    title: string
    link: string
    component: string 
    hijos: Nodo[]


    constructor(title: string, link: string, component: string) {
        this.title = title
        this.link = link
        this.component = component
        this.hijos = [];
    }

    agregarHijo(nodo: Nodo): void {
        this.hijos.push(nodo);
    }
}

export default Nodo;