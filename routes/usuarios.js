
const { Router } = require('express');


const { usuariosGet,
    usuariosUpdate,
        usuariosPost,
        usuariosDelete,
       } = require('../controllers/usuarios');
const { validarCampos } = require('../middleware/validar-campos');
//const Usuario = require('../models/usuarios');

const {validarJWT}=require('../middleware/validar-jwt')


const router = Router();


router.get('/', usuariosGet );


router.put('/:id',usuariosUpdate );

router.post('/',[validarJWT,validarCampos],usuariosPost );

router.delete('/:id',usuariosDelete );

//router.patch('/', usuariosPatch );





module.exports = router;