import { useState } from "react";
import { LinkedList } from "./LinkedList";
import { Node } from "./LinkedNode";

type Song = {
  id: number;
  title: string;
  artist: string;
};

const mockedSongs: Song[] = [
  { id: 1, title: "Turista", artist: "Bad Bunny" },
  { id: 2, title: "Diabla", artist: "Xavi" },
  { id: 3, title: "Euphories", artist: "Videoclub" },
  { id: 4, title: "Light Switch", artist: "Charlie Puth" },
  { id: 5, title: "Worldstar Money", artist:"Joji"},
  { id: 6, title: "Home", artist:"Vacations"},
  { id: 7, title: "Neverita", artist:"Bad Bunny"},
  { id: 8, title: "Pictures of Girls", artist:"Wallows"},
  { id: 9, title: "niño,", artist:"Ed Maverick"},
  { id: 10, title: "Tom's Diner", artist:"AnnenMayKantereit"},
];

type PlayerState = {
  list: LinkedList;
  current: Node | null;
};

export default function LinkedReproductor() {
  const [player, setPlayer] = useState<PlayerState>(() => {
    const list = new LinkedList();
    mockedSongs.forEach((s) => list.append(s));
    return { list, current: list.head };
  });

  const siguiente = () => {
    setPlayer((p) => ({
      ...p,
      current: p.current?.next ? p.current.next : p.current,
    }));
  };

  const cancionInicial = () => {
    setPlayer((p) => ({ ...p, current: p.list.head }));
  };

  return (
    <>
      <h2>Linked Reproductor (Linked List)</h2>

      <p>
        Reproduciendo:{" "}
        {player.current
          ? `${player.current.value.title} - ${player.current.value.artist}`
          : "---"}
      </p>

      <button onClick={siguiente}>Siguiente</button>
      <button onClick={cancionInicial}>Canción Inicial</button>
    </>
  );
}