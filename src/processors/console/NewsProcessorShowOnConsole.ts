import { NewsProcessor } from '../NewsProcessor';
import { News } from '../../news/News';

export class NewsProcessorShowOnConsole extends NewsProcessor {
  async process(news: Array<News>): Promise<void> {
    console.log(news);
  }
}
