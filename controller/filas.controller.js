const mysql = require('../mysql');


exports.entrarFila = async (req, res) => {
    try{
const resultado = await mysql.execute('INSERT INTO lines (user_id,atracoes_id)   VALUES (?,?)',
    [ res.locals.idUsuario, req.params.atracoes_id]);
 return res.status(201).send({ "mensagem": resultado});

    } catch(error){
        return res.status(500).send(error);


    }
}