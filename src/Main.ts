import { SiteG1 } from './sites/SiteG1';
import { SaveEnum } from './save/Save';

export class Main {
  async fetchG1(): Promise<void> {
    const g1 = new SiteG1();
    await g1.fetchNews();
    await g1.saveNews(SaveEnum.CSV, './output/test.csv');
    await g1.saveNews(SaveEnum.CONSOLE);
  }
}

const main = new Main();
main.fetchG1();
