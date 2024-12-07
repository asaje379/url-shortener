import { Express } from 'express';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

export function loadAppsModule(app: Express) {
  new AppsController(app, new AppsService()).init();
}
