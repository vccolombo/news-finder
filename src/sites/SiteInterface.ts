import { News } from './News';
import { SaveEnum } from '../save/Save';

export interface SiteInterface {
  getUrl(): string;
  fetchNews(): Promise<Array<News>>;
  saveNews(resource: SaveEnum): Promise<boolean>;
  getNews(): Array<News>;
}
