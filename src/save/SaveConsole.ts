import { SaveInterface } from './SaveInterface';

export class SaveConsole implements SaveInterface {
  async save<T>(arg: Array<T>): Promise<boolean> {
    console.log(arg);

    return true;
  }
}
