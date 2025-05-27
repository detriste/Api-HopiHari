exports.verificarBrinquedo = async (req, res, next) => {
    try {
      const resultado = await mysql.execute(
        'SELECT * FROM atracoes WHERE id = ?',
        [req.params.id_atracoes]
      );
  
      if (resultado.length == 0) {
        return res.status(404).send({ "mensagem": "Brinquedo não encontrado" });
      }
  
      next();
    } catch (error) {
      return res.status(500).send(error);
    }
  };
  
  exports.entrarFila = async (req, res, next) => {
    try {
      const resultado = await mysql.execute(
        'INSERT INTO hopi_hari_db.lines (id_user, id_ride) VALUES (?, ?)',
        [res.locals.idUsuario, Number(req.params.id_ride)]
      );
  
      return res.status(201).send({
        mensagem: "Usuário entrou na fila com sucesso",
        idInserido: resultado.insertId,
        linhasAfetadas: resultado.affectedRows
      });
    } catch (error) {
      console.error("Erro ao inserir na fila:", error);
      return res.status(500).send({ erro: "Erro ao inserir na fila" });
    }
  };
  
  