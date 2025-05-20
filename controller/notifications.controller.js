exports.notificationsRoute = async (req, res) => {
  try {
    const resultados = await mysql.execute(`
      SELECT * FROM notifications WHERE status = true
    `);

    console.log('Notificações encontradas:', rows); // Verifique no terminal

    // Se não encontrou notificações, envie uma mensagem clara
    if (!rows.length) {
      return res.status(200).json({ notificacoes: [], mensagem: "Nenhuma notificação encontrada" });
    }

    // Se encontrou, envie os dados
    return res.status(200).json({ notificacoes: rows });

  } catch (error) {
    console.error("Erro ao buscar notificações:", error);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
};
