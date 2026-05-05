import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import "./App.css";
import type { Producto } from "./Producto";
import { Trie } from "./Trie";

function App() {
  const [trie] = useState<Trie>(() => {
    const newTrie = new Trie();

    newTrie.insert("air max", 90);
    newTrie.insert("air force", 95);
    newTrie.insert("air jordan", 85);
    newTrie.insert("adidas boost", 80);
    newTrie.insert("adidas campus", 88);
    newTrie.insert("nike dunk", 92);
    newTrie.insert("nike cortez", 76);
    newTrie.insert("new balance 550", 89);

    return newTrie;
  });

  const [prefix, setPrefix] = useState<string>("air");
  const [topK, setTopK] = useState<number>(2);

  const [productName, setProductName] = useState<string>("");
  const [popularity, setPopularity] = useState<number>(0);

  const [version, setVersion] = useState<number>(0);

  const prefixResults: Producto[] = useMemo(() => {
    return trie.searchByPrefix(prefix);
  }, [trie, prefix, version]);

  const topResults: Producto[] = useMemo(() => {
    return trie.searchTopK(prefix, topK);
  }, [trie, prefix, topK, version]);

  const handlePrefixChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPrefix(event.target.value);
  };

  const handleTopKChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTopK(Number(event.target.value));
  };

  const handleProductNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setProductName(event.target.value);
  };

  const handlePopularityChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPopularity(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (productName.trim() === "") {
      alert("Write a product name");
      return;
    }

    if (popularity < 0 || popularity > 100) {
      alert("Popularity must be between 0 and 100");
      return;
    }

    trie.insert(productName, popularity);

    setProductName("");
    setPopularity(0);
    setVersion(version + 1);
  };

  return (
    <main className="app">
      <section className="card">
        <h1>Smart Search Engine</h1>
        <p>
          Los productos se guardan en un Trie y los más populares 
          se regresan en un Heap
        </p>

        <div className="search-box">
          <label>
            Buscar por Prefijo
            <input
              type="text"
              value={prefix}
              onChange={handlePrefixChange}
              placeholder="Example: air"
            />
          </label>

          <label>
            Top K
            <input
              type="number"
              min="1"
              value={topK}
              onChange={handleTopKChange}
            />
          </label>
        </div>

        <h2>Productos encontrados</h2>

        {prefixResults.length === 0 ? (
          <p>Productos no encontrados.</p>
        ) : (
          <ul className="product-list">
            {prefixResults.map((product) => (
              <li key={product.name}>
                <span>{product.name}</span>
                <strong>{product.popularity}</strong>
              </li>
            ))}
          </ul>
        )}

        <h2>Resultados</h2>

        {topResults.length === 0 ? (
          <p>Resultados no encontrados.</p>
        ) : (
          <ul className="product-list top-list">
            {topResults.map((product) => (
              <li key={product.name}>
                <span>{product.name}</span>
                <strong>{product.popularity}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Inserte Producto</h2>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nombre del producto
            <input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              placeholder="Example: air zoom"
            />
          </label>

          <label>
            Popularidad
            <input
              type="number"
              min="0"
              max="100"
              value={popularity}
              onChange={handlePopularityChange}
            />
          </label>

          <button type="submit">Insertar</button>
        </form>
      </section>
    </main>
  );
}

export default App;