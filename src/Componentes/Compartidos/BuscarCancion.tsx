import type { BuscarCancionProps } from "../../Interfaces/componentProps.interface";

function BuscarCancion({
  textoBusqueda,
  existeCancion,
  cambiarTextoBusqueda,
}: BuscarCancionProps) {
  return (
    <article className="card">
      <h2>Buscar canción exacta</h2>
      <p className="card__description">
        El Trie revisa si el título COMPLETO existe dentro de la estructura.
      </p>

      <input
        type="text"
        placeholder="Ejemplo: billie jean"
        value={textoBusqueda}
        onChange={(event) => cambiarTextoBusqueda(event.target.value)}
      />

      {textoBusqueda !== "" && (
        <p className="result">
          Resultado:{" "}
          <strong>{existeCancion ? "La canción existe" : "No existe"}</strong>
        </p>
      )}
    </article>
  );
}

export default BuscarCancion;
