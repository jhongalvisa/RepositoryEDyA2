import Nodo from "./Nodo";
import ArbolNario from "./ArbolNario";

const raiz = new Nodo("root", "Mi Unidad", "carpeta", "admin@mail.com");

const documentos = new Nodo("1", "Documentos", "carpeta", "admin@mail.com");
const imagenes = new Nodo("2", "Imagenes", "carpeta", "admin@mail.com");
const tareaPdf = new Nodo("3", "Tarea.pdf", "archivo", "jhon@mail.com");
const fotoJpg = new Nodo("4", "Foto.jpg", "archivo", "jhon@mail.com");
const notasTxt = new Nodo("5", "Notas.txt", "archivo", "admin@mail.com");

raiz.agregarHijo(documentos);
raiz.agregarHijo(imagenes);

documentos.agregarHijo(tareaPdf);
documentos.agregarHijo(notasTxt);
imagenes.agregarHijo(fotoJpg);

const arbolInicial = new ArbolNario(raiz);

export default arbolInicial;