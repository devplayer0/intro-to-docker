const express = require('express');

let visitors = 0;

const app = express();
app.get('/', (_, res) => res.end(`Hi there! You're visitor ${++visitors}.\n`));
const server = app.listen(3000, () => console.log('Server running!'));

function shutdown() {
  // Graceful shutdown
  console.log('Shutting down');
  server.close();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
