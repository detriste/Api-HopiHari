const express = require('express');
const router = express.Router();

// Rota de Cadastro
router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    // Aqui você faria a lógica para salvar no banco de dados
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    // Simulando um cadastro com sucesso
    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        dados: { nome, email }
    });
});

module.exports = router;
