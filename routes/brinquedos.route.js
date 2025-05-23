const express = require('express');
const router = express.Router();
const login = require('../middleware/usuarios.middleware');
const brinquedoscontroller  = require('../controller/brinquedos.controller');



router.post ('/', 
    login.required,
    login.userRequired,
    brinquedoscontroller.cadastroBrinquedo,
);


module.exports = router;