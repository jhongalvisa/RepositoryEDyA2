import { useState } from "react";
import type { Libro } from "./LibrosType";
import { StackLibros } from "./StackLibros";

const librosPrueba: Libro[] = [
    { nombre: "Mil Años de Soledad", ISBN: "1111111111111", autor: "Gabriel García Márquez", editorial: "Sudamericana" },
    { nombre: "El principito", ISBN: "2222222222222", autor: "Antoine de Saint-Exupéry", editorial: "Harcourt" },
    { nombre: "1984", ISBN: "3333333333333", autor: "George Orwell", editorial: "Signet Classic" },
    { nombre: "Don Quijote de la Mancha", ISBN: "4444444444444", autor: "Miguel de Cervantes", editorial: "Harper Perennial" },
    { nombre: "La sombra del viento", ISBN: "5555555555555", autor: "Carlos Ruiz Zafón", editorial: "Penguin" },
    { nombre: "Rayuela", ISBN: "6666666666666", autor: "Julio Cortázar", editorial: "Cátedra" },
    { nombre: "Crónica de una muerte anunciada", ISBN: "7777777777777", autor: "Gabriel García Márquez", editorial: "Vintage" },
];

const stack = new StackLibros();
for (let i = 0; i < librosPrueba.length; i++) {
    stack.push(librosPrueba[i]);
}

export default function LibrosUI() {
    const [librosUI, setLibrosUI] = useState<Libro[]>(stack.print());

    const [nombre, setNombre] = useState("");
    const [ISBN, setISBN] = useState("");
    const [autor, setAutor] = useState("");
    const [editorial, setEditorial] = useState("");

    function agregarLibro() {
        const libro: Libro = { nombre, ISBN, autor, editorial };
        stack.push(libro);
        setLibrosUI(stack.print());

        setNombre("");
        setISBN("");
        setAutor("");
        setEditorial("");
    }

    return (
        <div>
            <h2>Stack de Libros</h2>

            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input value={ISBN} onChange={(e) => setISBN(e.target.value)} placeholder="ISBN" />
            <input value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" />
            <input value={editorial} onChange={(e) => setEditorial(e.target.value)} placeholder="Editorial" />

            <button onClick={agregarLibro}>Agregar Libro</button>

            <hr />

            {librosUI.map((b, i) => (
                <div key={i}>
                    {b.nombre} - {b.ISBN} - {b.autor} - {b.editorial}
                </div>
            ))}
        </div>
    );
}