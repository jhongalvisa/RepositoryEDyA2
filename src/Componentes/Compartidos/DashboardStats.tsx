import type { DashboardStatsProps } from "../../Interfaces/componentProps.interface";

function DashboardStats({
  totalCanciones,
  totalRelaciones,
  totalSugerencias,
}: DashboardStatsProps) {
  return (
    <section className="stats">
      <article className="stats__item">
        <h3>{totalCanciones}</h3>
        <p>Canciones registradas</p>
      </article>

      <article className="stats__item">
        <h3>{totalRelaciones}</h3>
        <p>Relaciones del grafo</p>
      </article>

      <article className="stats__item">
        <h3>{totalSugerencias}</h3>
        <p>Sugerencias encontradas</p>
      </article>
    </section>
  );
}

export default DashboardStats;
