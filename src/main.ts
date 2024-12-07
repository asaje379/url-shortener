import { app } from './app';
import { AppController } from './app/app.controller';
import { initConfigs } from './config/config';
import { initDatabaseConfigs } from './database';
import { loadModules } from './modules';

async function bootstrap() {
  initConfigs();
  await initDatabaseConfigs();

  new AppController(app).init();
  loadModules(app);

  app.listen(3000);
}

bootstrap();
