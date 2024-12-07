import request from 'supertest';
import { app } from '../../src/app';
import { AppController } from '../../src/app/app.controller';

beforeAll(() => {
  new AppController(app).init();
});

describe('liveness', () => {
  it('should return status 200', () => {
    return request(app).get('/live').expect(200);
  });

  it('should return `Server is running live 🚀`', () => {
    return request(app)
      .get('/live')
      .then((response) => {
        expect(response.text).toBe('Server is running live 🚀');
      });
  });
});
