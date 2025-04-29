const express = require("express");
const router = express.Router();

// Exemplo de cadastro (você pode conectar depois com banco de dados)
router.post("/", (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    // Aqui você cadastraria no banco de dados. Por enquanto vamos simular:
    const novoUsuario = { nome, email, senha };

    // Simulação de resposta:
    res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        usuario: novoUsuario
    });
});

module.exports = router;