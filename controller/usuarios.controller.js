const mysql = require('../mysql'); // ajuste o caminho se necessário
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



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
                req.body.name,
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
        const { first_name,last_name,email,password,birth_date,phone } = req.body;

        const resultado = await mysql.execute(`
            INSERT INTO usuario (first_name, last_name, email, password, birth_date, phone) VALUES (?, ?, ?, ?, ?, ?);`, [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                req.body.password,
                req.body.birth_date,
                req.body.phone
            ]
        );

      return res.status(201).send({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};




exports.login = async (req, res) => {
try{
 const usuario =  await mysql.execute(`select * FROM users where email = ?`, [req.body.email]);
 console.log(usuario);

 if(usuario.length == 0){
    return res.status(401).send( {"mensagem": "Falha na autenticação!"} );

 }
} catch (error) {
return res.status(500).send({ "error": error});
}
}