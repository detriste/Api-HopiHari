const mysql2 = require('mysql2/promise');

// Cria a conexão com await
let pool;
(async () => {
  pool = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3307,
    database: "hopihari_db"
  });
})();

// Função de execução segura, que espera até o pool estar pronto
exports.execute = async (query, params = []) => {
  if (!pool) {
    throw new Error("Conexão com o banco de dados ainda não foi inicializada.");
  }

  const [rows] = await pool.execute(query, params);
  return rows;
};
