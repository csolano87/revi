 const { Sequelize, DataTypes, Model } = require('sequelize');
const db =require ('../db/connection');


const Detalle=db.define('Detalle',{ 
codigo_id:{
    type:DataTypes.STRING
},
producto_id:{
    type:DataTypes.STRING
},
producto_nombre:{
    type:DataTypes.STRING
} ,
    freezeTableName: true,
    tableName: "detalle"

}); 
// Usuario.methods.toJSON = function() {
//     const { __v, password, id, ...usuario  } = this.toObject();
//     usuario.uid = _id;
//     return usuario;
// }
module.exports= Detalle; 