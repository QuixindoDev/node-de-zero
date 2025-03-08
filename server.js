import {fastify} from 'fastify';
import { DatabaseMemory } from './database_memory.js';


const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (response, reply) => {
  database.create({
    title: 'video 01',
    description: 'Este é o video 01',
    duration: 180
  });

  console.log(database.list());

  return reply.status(201).send();
});

server.get('/video', () => {
  return 'Hello Rocketseat'
});

server.put('/videos/:id', () => {
  return 'Hello Node.js'
});

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
});

server.listen({
  port: 3333
});