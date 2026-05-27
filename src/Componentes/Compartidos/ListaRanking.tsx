import type { ListaRankingsProps } from "../../Interfaces/componentProps.interface";

function ListaRankings({ rankingCanciones }: ListaRankingsProps) {
  return (
    <article className="card card--ranking">
      <h2>TOP canciones populares</h2>
      <p className="card__description">
        El Max Heap organiza las canciones usando el número de reproducciones.
      </p>

      <ol className="ranking">
        {rankingCanciones.map((cancion, index) => {
          return (
            <li key={index}>
              <span>
                {cancion.titulo} - {cancion.artista}
              </span>
              <strong>{cancion.reproducciones}</strong>
            </li>
          );
        })}
      </ol>
    </article>
  );
}

export default ListaRankings;
