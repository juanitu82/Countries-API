const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   return sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM({
        values: ['1','2','3','4','5']
    }),
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    season: {
        type: DataTypes.ENUM({
            values: ['Primavera', 'Invierno','Otoño','Verano']
        }),
      allowNull: false
    }
  });
};