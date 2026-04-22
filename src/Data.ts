import type { Ciudad } from "./Ciudad";
import type { Persona } from "./Persona";

export const ciudades: Ciudad[] = [
    { id: "c1", nombre: "Cali" },
    { id: "c2", nombre: "Bogotá" },
    { id: "c3", nombre: "Medellín" },
];

export const personas: Persona[] = [
    { id: "p1", nombre: "Juan", edad: 20, ciudadId: "c1" },
    { id: "p2", nombre: "Ana", edad: 22, ciudadId: "c2" },
    { id: "p3", nombre: "Pedro", edad: 19, ciudadId: "c1" },
    { id: "p4", nombre: "Laura", edad: 21, ciudadId: "c3" },
];