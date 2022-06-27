import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

const createServer = (): FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> => {
  const server = fastify();

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
};

export default createServer;
