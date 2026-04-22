import Graph from "./Graph";
import { ciudades, personas } from "./Data";
import VistaGrafo from "./VistaGrafo";
import ListaCiudadPersonas from "./ListaCiudadPersonas";

function Pagina() {
    const graph = new Graph();

    ciudades.forEach((ciudad) => graph.addCiudad(ciudad));
    personas.forEach((persona) => graph.addPersona(persona));

    const ciudadSeleccionada = ciudades[0];
    const personaDeLaCiudad = graph.getPersonasByCiudad(ciudadSeleccionada.id);
    const graphData = graph.getGraphData();

    return(
        <div>
            <h1>Challenge 10 - Grafos</h1>

            <ListaCiudadPersonas
            ciudad={ciudadSeleccionada}
            personas={personaDeLaCiudad}
            />

            <VistaGrafo nodes={graphData.nodes} links={graphData.links} />
        </div>
    );
}

export default Pagina;