const { Sequelize, DataTypes, Model } = require('sequelize');
const db =require ('../db/connection');


const Cabecera=db.define('Cabecera',{ 
AREA:{
    type:DataTypes.STRING
},
CODE:{
    type:DataTypes.STRING
},
DATE:{
    type:DataTypes.DATE
},
HOUR:{
    type:DataTypes.TIME
},
IDENTIFICATIONTYPE:{
    type:DataTypes.STRING
} ,
IDENTIFIER:{
    type:DataTypes.INTEGER
},
NAME:{
    type:DataTypes.STRING
},
LASTNAME:{
    type:DataTypes.STRING
},
SECONDLASTNAME:{
    type:DataTypes.STRING
},
BIRTHDAY:{
    type:DataTypes.DATE
} ,
SEX:{
    type:DataTypes.STRING
},
OBSERVATION:{
    type:DataTypes.STRING
} ,
},

{
    freezeTableName: true,
    tableName: "cabeceras"

}); 

// const Detalle=db.define('Detalle',{ 
//     codigo_id:{
//         type:DataTypes.STRING
//     },
//     PRODUCTOID:{
//         type:DataTypes.STRING
//     },
//     PRODUCTONAME:{
//         type:DataTypes.STRING
//     } ,
//         freezeTableName: true,
//         tableName: "detalles"
//     },

//     {
//         freezeTableName: true,
//         tableName: "cabeceras"
//     });  
  /*   const DetalleCabecera = db.define('DetalleCabecera', {
        CabeceraCodigo: {
          type: DataTypes.STRING,
          references: {
            model: Cabecera, // 'Movies' would also work
            key: 'codigo'
          }
        },
        DetalleCodigo: {
          type: DataTypes.STRING,
          references: {
            model: Detalle, // 'Actors' would also work
            key: 'codigo_id'
          }
        }
    
      }); */
    // Cabecera.belongsToMany(Cabecera, { through: 'Cabecera_Detalle' });
//Detalle.belongsToMany(Detalle, { through: 'Cabecera_Detalle' });






 
module.exports= Cabecera; 