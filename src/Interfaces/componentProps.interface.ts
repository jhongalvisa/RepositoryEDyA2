import type { FormEvent } from "react";
import type { Cancion } from "./Cancion.interface";
import type { CancionForm } from "./CancionForm.interface";

export interface DashboardStatsProps {
  totalCanciones: number;
  totalRelaciones: number;
  totalSugerencias: number;
}

export interface CancionFormProps {
  form: CancionForm;
  cambiarTitulo: (valor: string) => void;
  cambiarArtista: (valor: string) => void;
  cambiarReproducciones: (valor: string) => void;
  agregarCancion: (event: FormEvent<HTMLFormElement>) => void;
}

export interface BuscarCancionProps {
  textoBusqueda: string;
  existeCancion: boolean;
  cambiarTextoBusqueda: (valor: string) => void;
}

export interface SugerenciasProps {
  prefijo: string;
  sugerencias: string[];
  cambiarPrefijo: (valor: string) => void;
}

export interface ListaRankingsProps {
  rankingCanciones: Cancion[];
}

export interface RecomendacionesProps {
  canciones: Cancion[];
  cancionSeleccionada: string;
  cancionesRelacionadas: string[];
  cambiarCancionSeleccionada: (valor: string) => void;
}

export interface ListaCancionesProps {
  canciones: Cancion[];
}
