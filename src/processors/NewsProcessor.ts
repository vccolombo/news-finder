import { News } from '../news/News';

export abstract class NewsProcessor {
  abstract async process(news: Array<News>): Promise<unknown>;
}
