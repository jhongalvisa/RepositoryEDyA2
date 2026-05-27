import type { SugerenciasProps } from "../../Interfaces/componentProps.interface";

function Sugerencias({
  prefijo,
  sugerencias,
  cambiarPrefijo,
}: SugerenciasProps) {
  return (
    <article className="card">
      <h2>Sugerencias por prefijo</h2>
      <p className="card__description">
        El Trie permite mostrar canciones que empiezan por las letras escritas.
      </p>

      <input
        type="text"
        placeholder="Ejemplo: b"
        value={prefijo}
        onChange={(event) => cambiarPrefijo(event.target.value)}
      />

      <ul className="list">
        {sugerencias.map((cancion, index) => {
          return <li key={index}>{cancion}</li>;
        })}
      </ul>

      {prefijo !== "" && sugerencias.length === 0 && (
        <p className="empty">No hay sugerencias para ese prefijo.</p>
      )}
    </article>
  );
}

export default Sugerencias;
