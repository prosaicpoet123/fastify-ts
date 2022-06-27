import helmet from '@fastify/helmet';
import cors from '@fastify/cors';

import createServer from './server';
import routes from './routes';

const dev = process.env.NODE_ENV === 'development';

if (!dev) {
  console.log('Server running in production mode');
}

const server = createServer();

server.register(helmet);
server.register(cors);
server.register(routes);

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    await server.listen({ port });
    console.log(`🚀 Server ready at http://localhost:${port}`);
  } catch (err) {
    console.log('[ERROR]', err);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});

process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
