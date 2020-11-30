import { Logger } from '../logs/Logger';
import { createDirectory } from '../utils/files/createDirectory';
import { writeCSV } from '../utils/csv/writeCSV';

export enum SaveEnum {
  CSV,
  JSON,
  CONSOLE,
}

export class Save {
  static async toCSV<T>(
    arg: Array<T>,
    savePath: string,
    separator = ',',
  ): Promise<boolean> {
    if (!savePath) {
      Logger.logError('Save.toCSV', 'Path missing');
      return false;
    }

    await createDirectory(savePath);
    return writeCSV(arg, savePath, separator);
  }

  static async toConsole<T>(arg: Array<T>): Promise<boolean> {
    console.log(arg);

    return true;
  }
}
