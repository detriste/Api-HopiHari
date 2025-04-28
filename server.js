const http = require('http'); // Importa o módulo HTTP
const app = require('./index'); // Importa o app do index.js (ajuste o caminho se necessário)

const server = http.createServer(app); // Cria o servidor usando o app

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
