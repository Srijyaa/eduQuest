const http = require('http');
const app = require('./app');
const PORT = 3000;

server = http.createServer(app);
server.listen(PORT, () => console.log("App is listening on port " + PORT));