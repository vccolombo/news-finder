import { News } from './News';
import { SaveEnum } from '../save/SaveEnum';

export interface SiteInterface {
  getUrl(): string;
  fetchNews(): Promise<News[]>;
  saveNews(resource: SaveEnum): Promise<boolean>;
}
