
const { Request, Response } = require('express');
const Usuario=require('../models/usuarios')

const bcryptjs=require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');

const login=async (req,res)=>{

    const {correo, password}=req.body;
    const usuario= new Usuario({correo,password});
    
        //verificar si el correo existe
        const existeusuario=await Usuario.findOne({
            where: {
                correo: usuario.correo
            }
        });
       

//const usuario=await Usuario.findOne({correo});
if (!existeusuario) {
    return res.status(400).json({
        msg:'usuario/ password no son correctos-coreo'
    });

}
//console.log(password)
 const validarPassword =bcryptjs.compareSync(password, existeusuario.password);
if (!validarPassword) {
    return res.status(400).json({
        msg:'usuario no son correctos-pass'
    });
} 
//console.log(existeusuario.id)
const token =await generarJWT(existeusuario.id);


console.log(existeusuario)

        

        res.json({
            existeusuario,
token
          
        });
    /* } catch (error) {
        console.log(error);
        return res.status(500).json({

            msg:'Comuniquese con el Administrador'
        })
    } */


};

module.exports={login};