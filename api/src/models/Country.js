const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
    },
    bandera: {
      type: DataTypes.STRING      
    },
    continente: {
      type: DataTypes.STRING      
    },
    capital: {
      type: DataTypes.STRING      
    },
    subregion: {
      type: DataTypes.STRING      
    },
    area: {
      type: DataTypes.INTEGER      
    },
    poblacion: {
      type: DataTypes.INTEGER      
    }
  });
};
