
const { Request, Response } = require('express');
const Usuario=require('../models/usuarios')

const bcryptjs=require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');

const login=async (req,res)=>{

    const {usuario, password}=req.body;
    const user= new Usuario({usuario,password});
    
        //verificar si el correo existe
        const existeuser=await Usuario.findOne({
            where: {
                usuario: user.usuario
            }
        });
       

//const usuario=await Usuario.findOne({correo});
if (!existeuser) {
    return res.status(400).json({
        msg:'usuario/ password no son correctos-coreo'
    });

}
//console.log(password)
 const validarPassword =bcryptjs.compareSync(password, existeuser.password);
if (!validarPassword) {
    return res.status(400).json({
        msg:'usuario no son correctos-pass'
    });
} 
//console.log(existeusuario.id)
const token =await generarJWT(existeuser.id);

<<<<<<< HEAD

console.log(existeuser)

=======

console.log(existeusuario)

>>>>>>> 07ec100479704ff347dcd1bd236cfa134e5e57a3
        

        res.json({
            existeuser,
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