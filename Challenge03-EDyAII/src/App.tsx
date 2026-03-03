import { useState } from "react";
import Reproductor from "./LinkedReproductor";
import DoublyLinkedHistorialWeb from "./DoublyHistorialWeb";

export default function App() {
  const [vista, setVista] = useState<"linked" | "doubly">("linked");

  return (
    <>
      <h1>Challenge 03</h1>

      <button onClick={() => setVista("linked")}>Linked</button>
      <button onClick={() => setVista("doubly")}>Doubly</button>

      {vista === "linked" ? <Reproductor /> : <DoublyLinkedHistorialWeb />}
    </>
  );
}