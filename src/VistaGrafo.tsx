import { Graph as GraphD3 } from "react-d3-graph";
import type { NodeGrafo } from "./NodeGrafo";
import type { EdgeGrafo } from "./EdgeGrafo";

interface Props {
  nodes: NodeGrafo[];
  links: EdgeGrafo[];
}

function VistaGrafo({ nodes, links }: Props) {
    const data = { nodes, links };

    const config = {
        directed: false,
        height: 500,
        width: 900,
        fontSize: 12,
        fontWeight: "normal",
        node: {
            size: 350,
            fontSize: 12,
            fontWeight: "normal",
        },
    };

    return (
        <div>
            <h2>Grafo de personas y ciudades</h2>
            <GraphD3 id="graph-basic" data={data} config={config} />
        </div>
    );
}

export default VistaGrafo;