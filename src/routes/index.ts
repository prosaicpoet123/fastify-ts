import fp from 'fastify-plugin';

const routes = fp(async (server, opts, next) => {
  server.route({
    url: '/healthcheck',
    logLevel: 'warn',
    method: ['GET', 'HEAD'],
    handler: async (request, reply) => reply.send('OK'),
  });

  next();
});

export default routes;
