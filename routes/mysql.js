const mysql2 = require('mysql2/promise');

// Cria um pool de conexões (forma correta e segura)
const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "hopi_hari_db",
});

exports.execute = async (query, params = []) => {
  const [rows] = await pool.execute(query, params);
  return rows;
};
