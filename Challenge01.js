const persona = {
  nombre: "Manuel",

  // regular
  decirNombre1: function () {
    return this.nombre;
  },

  // arrow
  decirNombre2: () => {
    return this.nombre;
  }
};

console.log(persona.decirNombre1()); // "Manuel"
console.log(persona.decirNombre2()); // undefined (o vacío)