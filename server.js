// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write("Rodou... Mas travou... NOoooo");

//   return response.end();
// });

// server.listen(3333);

import {fastify} from 'fastify';

const server = fastify();

server.get('/', () => {
  return 'Hellp World'
});

server.listen({
  port: 3333
});