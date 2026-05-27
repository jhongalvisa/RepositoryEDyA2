import type { RecomendacionesProps } from "../../Interfaces/componentProps.interface";

function Recomendaciones({
  canciones,
  cancionSeleccionada,
  cancionesRelacionadas,
  cambiarCancionSeleccionada,
}: RecomendacionesProps) {
  return (
    <article className="card">
      <h2>Recomendaciones</h2>
      <p className="card__description">
        El grafo conecta canciones similares mediante aristas.
      </p>

      <select
        value={cancionSeleccionada}
        onChange={(event) => cambiarCancionSeleccionada(event.target.value)}
      >
        {canciones.map((cancion, index) => {
          return (
            <option key={index} value={cancion.titulo}>
              {cancion.titulo}
            </option>
          );
        })}
      </select>

      <h3>Canciones relacionadas</h3>

      <ul className="list">
        {cancionesRelacionadas.map((cancion, index) => {
          return <li key={index}>{cancion}</li>;
        })}
      </ul>

      {cancionesRelacionadas.length === 0 && (
        <p className="empty">Esta canción todavía no tiene relaciones.</p>
      )}
    </article>
  );
}

export default Recomendaciones;
