
const { Router } = require('express');


const { categoriaGet,
    categoriaUpdate,
    categoriaPost,
        categoriaDelete,
       } = require('../controllers/categoria');
//const { validarCampos } = require('../middleware/validar-campos');
//const Usuario = require('../models/usuarios');

const {validarJWT}=require('../middleware/validar-jwt')


const router = Router();


router.get('/', categoriaGet );


router.put('/:id',categoriaUpdate );

router.post('/',categoriaPost );

router.delete('/:id',categoriaDelete );

//router.patch('/', usuariosPatch );





module.exports = router;