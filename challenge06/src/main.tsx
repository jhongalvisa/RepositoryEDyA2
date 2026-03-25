import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./MyContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root");
}

ReactDOM.createRoot(rootElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);