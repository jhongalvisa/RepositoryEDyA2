import BuscarCancion from "../Componentes/Compartidos/BuscarCancion";
import CancionForm from "../Componentes/Compartidos/CancionForm";
import DashboardStats from "../Componentes/Compartidos/DashboardStats";
import Header from "../Componentes/Compartidos/Header";
import ListaCanciones from "../Componentes/Compartidos/ListaCanciones";
import ListaRankings from "../Componentes/Compartidos/ListaRanking";
import Recomendaciones from "../Componentes/Compartidos/Recomendaciones";
import Sugerencias from "../Componentes/Compartidos/Sugerencias";
import usePlataformaMusica from "../Hooks/usePlataformaMusica";

function DashboardMusica() {
  const {
    canciones,
    form,
    textoBusqueda,
    prefijo,
    cancionSeleccionada,
    existeCancion,
    sugerencias,
    rankingCanciones,
    cancionesRelacionadas,
    totalRelaciones,
    cambiarTitulo,
    cambiarArtista,
    cambiarReproducciones,
    cambiarTextoBusqueda,
    cambiarPrefijo,
    cambiarCancionSeleccionada,
    agregarCancion,
  } = usePlataformaMusica();

  return (
    <main className="dashboard">
      <Header />

      <DashboardStats
        totalCanciones={canciones.length}
        totalRelaciones={totalRelaciones}
        totalSugerencias={sugerencias.length}
      />

      <section className="dashboard__grid">
        <CancionForm
          form={form}
          cambiarTitulo={cambiarTitulo}
          cambiarArtista={cambiarArtista}
          cambiarReproducciones={cambiarReproducciones}
          agregarCancion={agregarCancion}
        />

        <BuscarCancion
          textoBusqueda={textoBusqueda}
          existeCancion={existeCancion}
          cambiarTextoBusqueda={cambiarTextoBusqueda}
        />

        <Sugerencias
          prefijo={prefijo}
          sugerencias={sugerencias}
          cambiarPrefijo={cambiarPrefijo}
        />

        <Recomendaciones
          canciones={canciones}
          cancionSeleccionada={cancionSeleccionada}
          cancionesRelacionadas={cancionesRelacionadas}
          cambiarCancionSeleccionada={cambiarCancionSeleccionada}
        />

        <ListaRankings rankingCanciones={rankingCanciones} />

        <ListaCanciones canciones={canciones} />
      </section>
    </main>
  );
}

export default DashboardMusica;
