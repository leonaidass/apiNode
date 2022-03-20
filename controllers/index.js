const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
  }
  
 
  async leer() {
    try {
      const contenido = await fs.promises.readFile(this.filename, "utf-8");
      
      return JSON.parse(contenido) ;
    } catch (err) {
      console.log.apply(err);
    }
  }

  async leerPorId(id) {
    try {
      const contenido = await this.leer();
    //   const contenidoParseado = JSON.parse(contenido);
      const elemento = contenido.filter((e) => e.id === id);

      return elemento;
    } catch (err) {
      console.log.apply(err);
    }
  }
  
}

module.exports = Contenedor;
