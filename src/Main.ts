import { SiteFetcher } from './sites/SiteFetcher';
import { SiteFetcherG1 } from './sites/SiteFetcherG1';
import { NewsProcessor } from './processors/NewsProcessor';
import { News } from './news/News';
import { NewsProcessorSaveCSV } from './processors/csv/NewsProcessorSaveCSV';
import { NewsProcessorShowOnConsole } from './processors/console/NewsProcessorShowOnConsole';

export class Main {
  sfs = new Array<SiteFetcher>();
  nps = new Array<NewsProcessor>();

  async main(): Promise<void> {
    this.buildObjects();

    const news = await this.fetchNews();
    await this.processNews(news);
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
    this.nps.push(new NewsProcessorShowOnConsole());
  }

  private async fetchNews(): Promise<Array<News>> {
    const allNews = new Array<News>();

    // It is necessary to use Promise.all instead of forEach
    // because forEach just makes asynchronous requests and proceeds without
    // waiting for the news to be fetched
    await Promise.all(
      this.sfs.map(async (site) => {
        const news = await site.fetch();
        allNews.push(...news);
      }),
    );

    return allNews;
  }

  private async processNews(news: Array<News>): Promise<void> {
    this.nps.forEach(async (processor) => {
      processor.process(news);
    });
  }
}

new Main().main();
