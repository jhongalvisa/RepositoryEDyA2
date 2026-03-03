import { useState } from "react";
import { DoublyLinkedList } from "./DoublyLinkedList";
import { DoubleNode } from "./DoublyNode";

const paginas = ["/campus.uaovirtual.edu.co", "/uao.universitasxxi.cloud", "www.canva.com", "/mail.google.com"
                  , "www.youtube.com", "www.netflix.com", "/starlink.com/co/residential", "/es.react.dev"
];

type HistorialState = {
  list: DoublyLinkedList;
  current: DoubleNode | null;
};

export default function DoublyHistorialWeb() {
  const [historial, setHistorial] = useState<HistorialState>(() => {
    const list = new DoublyLinkedList();
    paginas.forEach((p) => list.append(p));
    return { list, current: list.tail }; 
  });

  const atras = () => {
    setHistorial((h) => ({
      ...h,
      current: h.current?.prev ?? h.current,
    }));
  };

  const adelante = () => {
    setHistorial((h) => ({
      ...h,
      current: h.current?.next ?? h.current,
    }));
  };

  const noPuedeAtras = historial.current?.prev == null;
  const noPuedeAdelante = historial.current?.next == null;

  return (
    <>
      <h2>Doubly Historial Web (Doubly Linked List)</h2>

      <p>Página actual: {historial.current ? historial.current.value : "---"}</p>

      <button onClick={atras} disabled={noPuedeAtras}>
        Atrás
      </button>
      <button onClick={adelante} disabled={noPuedeAdelante}>
        Adelante
      </button>
    </>
  );
}