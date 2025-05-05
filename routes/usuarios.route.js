const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastro', usuarioController.cadastro);



router.post("/login", () => {console.log("login")});
router.put("/:id", usuariosController.atualizarUsuario);
router.post("/", usuariosController.cadastro);

module.exports = router;

