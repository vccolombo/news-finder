import { News } from './News';
import { SaveEnum, Save } from '../save/Save';

export abstract class SiteBase {
  protected url: string;
  protected news: Array<News>;

  constructor(url: string) {
    this.url = url;
  }

  getUrl(): string {
    return this.url;
  }

  getNews(): Array<News> {
    return this.news;
  }

  async saveNews(resource: SaveEnum, savePath?: string): Promise<boolean> {
    if (resource === SaveEnum.CONSOLE) {
      return await Save.toConsole(this.news);
    } else if (resource === SaveEnum.CSV) {
      return await Save.toCSV(this.news, savePath, '|');
    } else if (resource === SaveEnum.JSON) {
      throw new Error('Method not implemented.');
    } else {
      throw new Error('Method not implemented.');
    }
  }
}
