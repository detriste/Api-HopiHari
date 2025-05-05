const mysql = require('../mysql'); // caminho correto para o arquivo de conexão

exports.cadastro = async (req, res) => {
    try {
        const { first_name, last_name, email, password, birth_date, phone } = req.body;

        if (!first_name || !last_name || !email || !password || !birth_date || !phone) {
            return res.status(400).send({ mensagem: "Todos os campos são obrigatórios." });
        }

        const resultados = await mysql.execute(
            `INSERT INTO users (first_name, last_name, email, password, birth_date, phone) 
             VALUES (?, ?, ?, ?, ?, ?);`,
            [first_name, last_name, email, password, birth_date, phone]
        );

        res.status(201).send({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};


