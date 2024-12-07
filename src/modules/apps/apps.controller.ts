import { Router, Express } from 'express';
import { AppsServiceInterface } from './apps.service.interface';

export class AppsController {
  router: Router;

  constructor(
    private app: Express,
    private readonly service: AppsServiceInterface,
  ) {
    this.router = Router();
  }

  init() {
    this.router.get('/', async (_, res) => {
      const apps = await this.service.getAll();
      res.status(200).json(apps);
    });

    this.app.use('/apps', this.router);
  }
}
