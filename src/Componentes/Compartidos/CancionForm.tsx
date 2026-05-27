import type { CancionFormProps } from "../../Interfaces/componentProps.interface";

function CancionForm({
  form,
  cambiarTitulo,
  cambiarArtista,
  cambiarReproducciones,
  agregarCancion,
}: CancionFormProps) {
  return (
    <article className="card">
      <h2>Insertar canción</h2>
      <p className="card__description">
        Esta sección agrega una nueva canción al arreglo principal. Luego el Trie
        y el Max Heap trabajan con esa información.
      </p>

      <form className="form" onSubmit={agregarCancion}>
        <input
          type="text"
          placeholder="Título de la canción"
          value={form.titulo}
          onChange={(event) => cambiarTitulo(event.target.value)}
        />

        <input
          type="text"
          placeholder="Artista"
          value={form.artista}
          onChange={(event) => cambiarArtista(event.target.value)}
        />

        <input
          type="number"
          placeholder="Reproducciones"
          value={form.reproducciones}
          onChange={(event) => cambiarReproducciones(event.target.value)}
        />

        <button type="submit">Agregar canción</button>
      </form>
    </article>
  );
}

export default CancionForm;
