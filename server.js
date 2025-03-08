import { fastify } from 'fastify';
import { DatabaseMemory } from './database_memory.js';

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
  const {title, description, duration} = request.body;
  database.create({
    title,
    description,
    duration
  });
  
  return reply.status(201).send();
});

server.get('/videos', () => {
  const videos = database.list();

  return videos;
});

server.put('/videos/:id', (request, reply) => {
  const {id} = request.params;
  const {title, description, duration} = request.body;

  database.update(id, {
    title,
    description,
    duration
  });

  return reply.status(204).send();
});

server.delete('/videos/:id', (request, reply) => {
  const {id} = request.params;

  database.delete(id);

  return reply.status(204).send();
});

server.listen({
  port: 3333
});