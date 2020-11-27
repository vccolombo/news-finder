export interface SaveInterface {
  save<T>(arg: Array<T>): Promise<boolean>;
}
