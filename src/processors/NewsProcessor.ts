import { News } from '../news/News';

export abstract class NewsProcessor {
  abstract process(news: Array<News>): Promise<unknown>;
}
