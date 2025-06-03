const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarios.controller');
const login = require('../middleware/usuarios.middleware');


router.post("/login",usuariosController.login);
router.put("/",login.required, usuariosController.atualizarUsuario);
router.post("/cadastro", usuariosController.cadastro);

module.exports = router;

