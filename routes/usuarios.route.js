const express = require("express");
const router = express.Router();
const usuariosController = require('../controller/usuarios.controller');
router.post('/cadastro', usuariosController.cadastro);
// Agora o caminho será: POST /usuarios/login




router.post("/login", () => {console.log("login")});
router.put("/:id", usuariosController.atualizarUsuario);
router.post("/", usuariosController.cadastro);

module.exports = router;

