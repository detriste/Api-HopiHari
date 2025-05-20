const mysql = require('../routes/mysql');

exports.notificationsRoute = async (req, res) => {
  try {
    const resultados = await mysql.execute(`
      SELECT * FROM notifications WHERE status = true
    `);

    console.log('Notificações encontradas:', resultados);

    // Corrigido: verificar resultados (e não rows)
    if (!resultados.length) {
      return res.status(200).json({ notificacoes: [], mensagem: "Nenhuma notificação encontrada" });
    }

    // Corrigido: retornar resultados
    return res.status(200).json({ notificacoes: resultados });

  } catch (error) {
    console.error("Erro ao buscar notificações:", error);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
};