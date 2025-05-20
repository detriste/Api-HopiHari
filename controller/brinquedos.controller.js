const mysql = require('../routes/mysql');


exports.brinquedosRoute = async (req, res) => {

try{

const resultados = await mysql.execute(`INSERT TO atracao (nome, tempo_espera, status, area) 
    VALUES (?, ?, ?, ?)`, 

    [req.body.nome, 
        req.body.tempo_espera, 
        req.body.status, 
        req.body.area]);

return res.status(201).send({
    "mensagem": "Brinquedo cadastrado com sucesso",
    "resultados": resultados
});
} catch  (error){
    return res.status(500).json({ erro: "Erro interno do servidor" });

}
}