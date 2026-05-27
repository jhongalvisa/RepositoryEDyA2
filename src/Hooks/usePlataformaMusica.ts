import type { FormEvent } from "react";
import { useState } from "react";
import MaxHeap from "../Algoritmos/MaxHeap";
import MusicGraph from "../Algoritmos/MusicGraph";
import Trie from "../Algoritmos/Trie";
import { cancionesIniciales } from "../Data/Canciones";
import { relacionesGrafo } from "../Data/RelacionesGrafo";
import type { Cancion } from "../Interfaces/Cancion.interface";
import type { CancionForm } from "../Interfaces/CancionForm.interface";

interface UsePlataformaMusica {
  canciones: Cancion[];
  form: CancionForm;
  textoBusqueda: string;
  prefijo: string;
  cancionSeleccionada: string;
  existeCancion: boolean;
  sugerencias: string[];
  rankingCanciones: Cancion[];
  cancionesRelacionadas: string[];
  totalRelaciones: number;
  cambiarTitulo: (valor: string) => void;
  cambiarArtista: (valor: string) => void;
  cambiarReproducciones: (valor: string) => void;
  cambiarTextoBusqueda: (valor: string) => void;
  cambiarPrefijo: (valor: string) => void;
  cambiarCancionSeleccionada: (valor: string) => void;
  agregarCancion: (event: FormEvent<HTMLFormElement>) => void;
}

function usePlataformaMusica(): UsePlataformaMusica {
  const [canciones, setCanciones] = useState<Cancion[]>(cancionesIniciales);

  const [form, setForm] = useState<CancionForm>({
    titulo: "",
    artista: "",
    reproducciones: "",
  });

  const [textoBusqueda, setTextoBusqueda] = useState<string>("");
  const [prefijo, setPrefijo] = useState<string>("");
  const [cancionSeleccionada, setCancionSeleccionada] = useState<string>(
    cancionesIniciales[0].titulo
  );

  const construirTrie = (): Trie => {
    const trie = new Trie();

    canciones.forEach((cancion) => {
      trie.insert(cancion.titulo);
    });

    return trie;
  };

  const construirGrafo = (): MusicGraph => {
    const grafo = new MusicGraph();

    canciones.forEach((cancion) => {
      grafo.addNode(cancion.titulo);
    });

    relacionesGrafo.forEach((relacion) => {
      grafo.addEdge(relacion.cancionUno, relacion.cancionDos);
    });

    return grafo;
  };

  const obtenerRanking = (): Cancion[] => {
    const maxHeap = new MaxHeap();
    maxHeap.heapify(canciones);

    const ranking: Cancion[] = [];

    while (maxHeap.size() > 0 && ranking.length < 5) {
      const cancion = maxHeap.pop();

      if (cancion) {
        ranking.push(cancion);
      }
    }

    return ranking;
  };

  const trie = construirTrie();
  const grafo = construirGrafo();

  const existeCancion =
    textoBusqueda !== "" ? trie.search(textoBusqueda) : false;

  const sugerencias =
    prefijo !== "" ? trie.buscarPorPrefijo(prefijo) : [];

  const rankingCanciones = obtenerRanking();
  const cancionesRelacionadas = grafo.searchVertices(cancionSeleccionada);

  const cambiarTitulo = (valor: string): void => {
    setForm((anterior) => {
      return {
        ...anterior,
        titulo: valor,
      };
    });
  };

  const cambiarArtista = (valor: string): void => {
    setForm((anterior) => {
      return {
        ...anterior,
        artista: valor,
      };
    });
  };

  const cambiarReproducciones = (valor: string): void => {
    setForm((anterior) => {
      return {
        ...anterior,
        reproducciones: valor,
      };
    });
  };

  const cambiarTextoBusqueda = (valor: string): void => {
    setTextoBusqueda(valor.toLowerCase());
  };

  const cambiarPrefijo = (valor: string): void => {
    setPrefijo(valor.toLowerCase());
  };

  const cambiarCancionSeleccionada = (valor: string): void => {
    setCancionSeleccionada(valor);
  };

  const agregarCancion = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      form.titulo === "" ||
      form.artista === "" ||
      form.reproducciones === ""
    ) {
      return;
    }

    const nuevaCancion: Cancion = {
      titulo: form.titulo.toLowerCase(),
      artista: form.artista.toLowerCase(),
      reproducciones: Number(form.reproducciones),
    };

    setCanciones((anterior) => [...anterior, nuevaCancion]);
    setCancionSeleccionada(nuevaCancion.titulo);

    setForm({
      titulo: "",
      artista: "",
      reproducciones: "",
    });
  };

  return {
    canciones,
    form,
    textoBusqueda,
    prefijo,
    cancionSeleccionada,
    existeCancion,
    sugerencias,
    rankingCanciones,
    cancionesRelacionadas,
    totalRelaciones: relacionesGrafo.length,
    cambiarTitulo,
    cambiarArtista,
    cambiarReproducciones,
    cambiarTextoBusqueda,
    cambiarPrefijo,
    cambiarCancionSeleccionada,
    agregarCancion,
  };
}

export default usePlataformaMusica;
