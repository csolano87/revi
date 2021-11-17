const { Router } = require('express');

//const check=require('express-validator')
//validator = require('validator');

const { login } = require('../controllers/auth');


const router = Router();

router.post('/login',login);
/* router.post('/login', [
    check('El correo es obligatorio').isEmail(),
    check('la contrasena  es obligatoria').not().isEmpty(),
] ,login); */


module.exports=router;