import { config } from 'dotenv';
import { EnvType } from './config.typings';

let env: EnvType;

export function loadEnv() {
  config();
  env = process.env as EnvType;
}

export { env };
