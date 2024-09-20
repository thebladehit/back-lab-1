'use strict';

const http = require('node:http');

const server = http.createServer((req, res) => {
  const responseData = {
    date: (new Date()).toISOString(),
    status: 'alive',
  };

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(responseData));
});

server.listen(3000, () => {
  console.log('Listening on 3000...')
});