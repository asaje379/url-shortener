import request from 'supertest';
import { app } from '../../../src/app';
import { AppsController } from '../../../src/modules/apps/apps.controller';
import { AppsServiceInterface } from '../../../src/modules/apps/apps.service.interface';
import { AppsEntity } from '../../../src/modules/apps/apps.entity';

const fakeApps: AppsEntity[] = [
  { id: 1, name: 'Test', apiKey: '1234' },
  { id: 2, name: 'Test 2', apiKey: '1234' },
];

export class MockAppsService implements AppsServiceInterface {
  async getAll() {
    return fakeApps;
  }
}

const mockAppsService = new MockAppsService();

beforeAll(() => {
  new AppsController(app, mockAppsService).init();
});

describe('AppsController', () => {
  describe('GET /apps', () => {
    it('should return status 200', () => {
      return request(app).get('/apps').expect(200);
    });

    it('should return a JSON as Content-type', () => {
      // TODO
    });

    it('should call getAll', () => {
      const getAll = jest.spyOn(mockAppsService, 'getAll');
      return request(app)
        .get('/apps')
        .then(() => {
          expect(getAll).toHaveBeenCalled();
        });
    });

    it('should return fake data', (done) => {
      request(app).get('/apps').expect(200, fakeApps, done);
    });
  });
});
