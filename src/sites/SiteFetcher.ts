import { News } from '../news/News';

export abstract class SiteFetcher {
  abstract readonly url: string;
  protected news: Array<News>;

  getNews(): Array<News> {
    return this.news;
  }

  abstract async fetch(): Promise<Array<News>>;
}
