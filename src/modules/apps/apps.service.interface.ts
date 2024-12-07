import { AppsEntity } from './apps.entity';

export interface AppsServiceInterface {
  getAll: () => Promise<AppsEntity[]>;
}
