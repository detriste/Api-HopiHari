const express = require('express');
const router = express.Router();

// Banco de dados falso (na memória)
let usuarios = [];

// Rota de cadastro (POST /usuarios/cadastro)
router.post('/cadastro', (req, res) => {
    const { first_name, last_name, email,password,birth_date,phone } = req.body;

    if (!first_name || !last_name|| !email || !password|| !birth_date|| ! phone) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    const novoUsuario = { id: usuarios.length + 1, first_name, last_name, email,password,birth_date,phone };
    usuarios.push(novoUsuario);

    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        dados: novoUsuario
    });
});

// Rota de atualização (PUT /usuarios/:id)
router.put('/cadastro/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado!" });
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;
    if (senha) usuario.senha = senha;

    res.status(200).json({
        mensagem: "Usuário atualizado com sucesso!",
        dados: usuario
    });
});

module.exports = router;
