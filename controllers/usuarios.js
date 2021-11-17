const { Request, Response } = require('express');



const bcryptjs = require('bcryptjs');

//const { json } =require ('sequelize/types');
const Usuario = require('../models/usuarios');



const usuariosGet = async (req, res) => {
   
    
        const usuarios = await Usuario.findAll();
   

        res.json({ usuarios });
       

};


    const usuariosPost = async (req, res) => {
   
    const {nombre, apellido,correo, password, rol}=req.body;


    const usuario= new Usuario({nombre, apellido,correo, password, rol});
   

    const existeEmail = await Usuario.findOne({
        where: {
            correo: usuario.correo
        }
    });


   // console.log(existeEmail)
    if (existeEmail) {
        return res.status(400).json({
            msg:'Este correo ya existe'
        });
     }
    
// encriptar 

  const salt =bcryptjs.genSaltSync();
  usuario.password=bcryptjs.hashSync(password, salt )



//try {

    //const usuario=new Usuario(body);
    await usuario.save();
    res.status(201).json({ 


       usuario
     }
       );
/* } catch (error) {
    console.log(error)
    res.status(500).json({ 


        msg: 'Error al guardar comuniquese con el Administrador..'
     } */
       

    
  
    };

    const usuariosUpdate = async (req, res) => {
   
    
        res.send('update guardada con exito..');
    
    };

    const usuariosDelete = async (req, res) => {
   
    const {id} =req.params;
    const usuario = await Usuario.findByPk({id});
    if(!usuario){
        return res.status(404).json({

            msg:'No existe un usuario con el id' +id
        })
    }
   // await usuario.destroy();
   await usuario.update({estado:false});
        res.status(200).json({
            msg:'delete guardada con exito..'});
    
    };

    module.exports={usuariosGet,

        usuariosPost,
        usuariosUpdate,
        usuariosDelete
    }