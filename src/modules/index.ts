import { Express } from 'express';
import { loadAppsModule } from './apps/apps.module';

export async function loadModules(app: Express) {
  loadAppsModule(app);
}
