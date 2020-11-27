import { News } from './News';
import { SaveConsole } from '../save/SaveConsole';
import { SaveEnum } from '../save/SaveEnum';

export abstract class SiteBase {
  protected url: string;
  protected news: Array<News>;

  constructor(url: string) {
    this.url = url;
  }

  getUrl(): string {
    return this.url;
  }

  async saveNews(resource: SaveEnum): Promise<boolean> {
    if (resource === SaveEnum.CONSOLE) {
      const console = new SaveConsole();
      return await console.save(this.news);
    } else if (resource === SaveEnum.CSV) {
      throw new Error('Method not implemented.');
    } else if (resource === SaveEnum.JSON) {
      throw new Error('Method not implemented.');
    } else {
      throw new Error('Method not implemented.');
    }
  }
}
