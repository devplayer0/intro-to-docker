const { promisify } = require("util");

const express = require('express');
const redis = require('redis');

const rClient = redis.createClient('redis://db:6379');
rClient.on('error', console.error);
const rIncrAsync = promisify(rClient.incr).bind(rClient);

const app = express();
app.get('/', async (_, res) => {
  const visitors = await rIncrAsync('visitors');
  res.end(`Hi there! You're visitor ${visitors}.\n`);
});
const server = app.listen(3000, () => console.log('Server running!'));

function shutdown() {
  // Graceful shutdown
  console.log('Shutting down');
  rClient.quit();
  server.close();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
