import { NewsProcessor } from '../NewsProcessor';
import { News } from '../../news/News';
import { Logger } from '../../logs/Logger';
import { createDirectory } from '../../utils/files/createDirectory';
import { writeCSV } from './writeCSV';

export class NewsProcessorSaveCSV extends NewsProcessor {
  private path: string;
  private separator: string;

  constructor(path: string, separator: string) {
    super();

    this.path = path;
    this.separator = separator;
  }

  async process(news: Array<News>): Promise<boolean> {
    if (!this.path) {
      Logger.logError('Save.toCSV', 'Path missing');
      return false;
    }
    if (!this.separator) {
      this.separator = ',';
      Logger.logDebug(
        'NewsProcessorSaveCSV.process',
        'Missing separator. Defaulting to: ' + this.separator,
      );
    }

    await createDirectory(this.path);
    return writeCSV(news, this.path, this.separator);
  }
}
