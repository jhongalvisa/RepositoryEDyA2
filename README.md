## Diferencia entre Arrow Functions y Regular Functions en JavaScript

En JavaScript, una **regular function** es la forma tradicional de crear funciones, y una **arrow function** es una forma más corta y moderna de escribirlas. Las dos sirven para ejecutar tareas, pero no se comportan igual en todos los casos.

La diferencia más importante aparece cuando se usa `this` dentro de objetos. En una función regular, `this` suele apuntar al objeto que está ejecutando la función. En una arrow function, `this` no se crea dentro de esa función, sino que se “hereda” desde afuera. Por eso, en métodos de objetos, normalmente conviene usar función regular para evitar resultados inesperados.

También hay diferencias prácticas: las arrow functions son muy útiles para funciones cortas y rápidas (por ejemplo en `map`, `filter` o `forEach`), mientras que las regular functions son mejores cuando necesitas un comportamiento más completo, como crear objetos con `new`.

**arrow function** escribe menos y resuelve tareas pequeñas y **regular function** para casos donde se necesita más control, especialmente en objetos y lógica más estructurada.

