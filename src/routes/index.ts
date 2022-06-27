import fp from 'fastify-plugin';

const routes = fp(async (server, opts, next) => {
  server.route({
    url: '/api/ping',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async (request, reply) => reply.send('pong'),
  });

  next();
});

export default routes;
