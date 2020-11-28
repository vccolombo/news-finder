import { News } from './News';
import { SaveEnum } from '../save/SaveEnum';

export interface SiteInterface {
  getUrl(): string;
  fetchNews(): Promise<Array<News>>;
  saveNews(resource: SaveEnum): Promise<boolean>;
  getNews(): Array<News>;
}
