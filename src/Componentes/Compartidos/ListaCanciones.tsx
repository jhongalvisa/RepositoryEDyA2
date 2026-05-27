import type { ListaCancionesProps } from "../../Interfaces/componentProps.interface";

function ListaCanciones({ canciones }: ListaCancionesProps) {
  return (
    <article className="card card--wide">
      <h2>Canciones registradas</h2>
      <p className="card__description">
        Lista base que alimenta el Trie, el Max Heap y los nodos del grafo.
      </p>

      <div className="song-table">
        {canciones.map((cancion, index) => {
          return (
            <div className="song-table__row" key={index}>
              <span>{cancion.titulo}</span>
              <span>{cancion.artista}</span>
              <strong>{cancion.reproducciones}</strong>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default ListaCanciones;
