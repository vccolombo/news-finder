import { SiteFetcher } from './sites/SiteFetcher';
import { SiteFetcherG1 } from './sites/SiteFetcherG1';
import { NewsProcessor } from './processors/NewsProcessor';
import { NewsProcessorSaveCSV } from './processors/csv/NewsProcessorSaveCSV';

export class Main {
  sfs = new Array<SiteFetcher>();
  nps = new Array<NewsProcessor>();

  async main(): Promise<void> {
    this.buildObjects();

    this.sfs.forEach(async (site) => {
      const news = await site.fetch();

      this.nps.forEach(async (processor) => {
        processor.process(news);
      });
    });
  }

  private buildObjects(): void {
    this.insertSites();
    this.insertProcessors();
  }

  private insertSites(): void {
    this.sfs.push(new SiteFetcherG1());
  }

  private insertProcessors(): void {
    this.nps.push(new NewsProcessorSaveCSV('output/news.csv', '|'));
  }
}

new Main().main();
