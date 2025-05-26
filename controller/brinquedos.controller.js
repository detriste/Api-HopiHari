const mysql = require('../routes/mysql');


exports.cadastroBrinquedo = async (req, res) => {
    try {
      console.log('Dados recebidos:', req.body);
      const resultados = await mysql.execute(`INSERT INTO atracoes (nome, tempo_espera, status, area) VALUES (?, ?, ?, ?)`, 
        [   req.body.nome, 
          req.body.tempo_espera, 
          req.body.status, 
          req.body.area  ]);

      console.log('Resultados da query:', resultados);
      return res.status(201).send({
        mensagem: "Brinquedo cadastrado com sucesso",
        resultados: resultados
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  };
  