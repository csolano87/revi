const { Sequelize, DataTypes, Model } = require('sequelize');
const db =require ('../db/connection');


const Cabecera=db.define('Cabecera',{ 
AREA:{
    type:DataTypes.STRING
},
CODE:{
    type:DataTypes.STRING,
    primaryKey: true,
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
    type:DataTypes.STRING
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

// },
// Cabecera.associate=models=>{
//     Cabecera.belongsTo(models.Detalle,{
//         foreingKey,{
//             allownull:false
//         }
//     });
  
}); 

module.exports= Cabecera; 
