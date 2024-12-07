export class AppsEntity {
  id!: number;
  name!: string;
  #api_key?: string;

  get apiKey() {
    return this.#api_key;
  }
}
