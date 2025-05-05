const mysql2 = require('mysql2/promise');

// Usa createPool para gerenciar conexões automaticamente
const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3307,
  database: "hopi_hari_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

exports.execute = async (query, params = []) => {
  const [rows] = await pool.execute(query, params);
  return rows;
};
