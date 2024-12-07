import { env, loadEnv } from './env.config';

beforeAll(() => {
  loadEnv();
});

describe('ENV variables', () => {
  describe('DATABASE_URL env variable', () => {
    it('DATABASE_URL should exist', () => {
      expect(env.DATABASE_URL).toBeDefined();
    });

    it('DATABASE_URL should be string', () => {
      expect(typeof env.DATABASE_URL).toBe('string');
    });

    it('DATABASE_URL should match postgres minimal url pattern', () => {
      // postgresql://postgres:root@locahost:5432/url_shortener
      expect(
        /^(postgres(ql)*:\/\/)\w*:\w*@\w+:\d+\/\w+/.test(env.DATABASE_URL),
      ).toBe(true);
    });
  });
});
