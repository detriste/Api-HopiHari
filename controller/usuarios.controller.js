const mysql = require('../routes/mysql'); // ajuste o caminho se necessário

// Atualizar usuário
exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuario = Number(req.params.id);

        const resultado = await mysql.execute(
            `
            UPDATE users
            SET name = ?,
                email = ?,
                password = ?
            WHERE id = ?
            `,
            [
                req.body.nome,
                req.body.email,
                req.body.password,
                idUsuario
            ]
        );

        return res.status(200).send({ "mensagem": "Usuário atualizado com sucesso!" });
    } catch (error) {
        return res.status(500).send({ "mensagem": error.message });
    }
};

// Inserir novo usuário
exports.cadastro = async (req, res) => {
    try {
        const { nome, email, password } = req.body;

        const resultado = await mysql.execute(
            `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
            [nome, email, password]
        );

        res.status(201).send({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

