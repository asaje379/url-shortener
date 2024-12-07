import { Router, Express } from 'express';

export class AppController {
  router: Router;
  app: Express;

  constructor(app: Express) {
    this.router = Router();
    this.app = app;
  }

  init() {
    this.router.get('/live', (_, res) => {
      res.status(200).send('Server is running live 🚀');
    });

    this.app.use('/', this.router);
  }
}
