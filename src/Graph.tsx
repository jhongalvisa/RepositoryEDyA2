import type { Persona } from "./Persona";
import type { Ciudad } from "./Ciudad";
import type { NodeGrafo } from "./NodeGrafo";
import type { EdgeGrafo } from "./EdgeGrafo";

class Graph {
    nodes: string[];
    adjList: Record<string, string[]>;
    personas: Persona[];
    ciudades: Ciudad[];

    constructor() {
        this.nodes = [];
        this.adjList = {};
        this.personas = [];
        this.ciudades = [];
    }

    addNode(node: string): void {
        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
            this.adjList[node] = [];
        }
    }

    addEdge(node1: string, node2: string): void {
        if (!this.adjList[node1] || !this.adjList[node2]) return;

        if (!this.adjList[node1].includes(node2)) {
            this.adjList[node1].push(node2);
        }

        if (!this.adjList[node2].includes(node1)) {
            this.adjList[node2].push(node1);
        }
    }

    addCiudad(ciudad: Ciudad): void {
        this.ciudades.push(ciudad);
        this.addNode(ciudad.id);
    }

    addPersona(persona: Persona): void {
        this.personas.push(persona);
        this.addNode(persona.id);
        this.addEdge(persona.id, persona.ciudadId);
    }

    searchNode(node: string): string | undefined {
        if (!this.nodes.length) return;
        return this.nodes.find((n) => n === node);
    }

    printAdjacency(node: string): void {
        if (this.searchNode(node)) {
            console.log(this.adjList[node]);
        }
    }

    printGraph(): void {
        console.log(this.adjList);
    }

    getPersonasByCiudad(ciudadId: string): Persona[] {
        return this.personas.filter((persona) => persona.ciudadId === ciudadId);
    }

    getGraphData(): { nodes: NodeGrafo[]; links: EdgeGrafo[] } {
        const cityNodes: NodeGrafo[] = this.ciudades.map((ciudad) => ({
            id: ciudad.nombre,
            color: "#38bdf8",
        }));

        const personNodes: NodeGrafo[] = this.personas.map((persona) => ({
            id: persona.nombre,
            color: "#facc15",
        }));

        const links: EdgeGrafo[] = this.personas.map((persona) => {
            const ciudad = this.ciudades.find((c) => c.id === persona.ciudadId);

            return {
                source: persona.nombre,
                target: ciudad ? ciudad.nombre : "",
            };
        });

        return {
            nodes: [...cityNodes, ...personNodes],
            links,
        };
    }
}

export default Graph;