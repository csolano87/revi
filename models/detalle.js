 const { Sequelize, DataTypes, Model } = require('sequelize');
const db =require ('../db/connection');
const Cabecera = require('./cabecera');


const Detalle=db.define('Detalle',{ 
CODE:{
    type:DataTypes.STRING
},
PRODUCTOID:{
    type:DataTypes.INTEGER
},
PRODUCTONAME:{
    type:DataTypes.STRING
} ,
},
{
    freezeTableName: true,
    tableName: "detalles"

});

Cabecera.hasMany(Detalle, { foreignKey: 'CODE' });

    




// Usuario.methods.toJSON = function() {
//     const { __v, password, id, ...usuario  } = this.toObject();
//     usuario.uid = _id;
//     return usuario;
// }
module.exports= Detalle; 