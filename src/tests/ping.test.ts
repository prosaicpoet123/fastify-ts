import routes from '../routes';
import createServer from '../server';

describe('/ping', () => {
  const server = createServer();
  server.register(routes);

  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('returns 200', async () => {
    await server.inject(
      {
        method: 'GET',
        url: '/api/ping',
      },
      (err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe('pong');
      }
    );
  });
});
