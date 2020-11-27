import { SiteBase } from './SiteBase';
import { SiteInterface } from './SiteInterface';
import { News } from './News';
import fetch from 'node-fetch';
import { HTMLElement, parse } from 'node-html-parser';
import { SaveEnum } from '../save/SaveEnum';

export class SiteG1 extends SiteBase implements SiteInterface {
  constructor() {
    const url = 'https://g1.globo.com/';
    super(url);
  }

  async fetchNews(): Promise<News[]> {
    let result: Array<News>;

    await fetch(this.url)
      .then((res) => res.text())
      .then((body) => {
        result = this.parseNews(body);
      });

    this.news = result;
    return result;
  }

  async saveNews(resource: SaveEnum): Promise<boolean> {
    return await super.saveNews(resource);
  }

  private parseNews(body: string): Array<News> {
    const news = new Array<News>();

    const root = parse(body);
    const posts = root.querySelectorAll('.feed-post');
    posts.forEach((post) => {
      const title = this.getNewsTitle(post);
      const url = this.getNewsUrl(post);
      const description = this.getNewsDescription(post);
      news.push(new News(title, url, description));
    });

    return news;
  }

  private getNewsTitle(post: HTMLElement): string {
    return post.querySelector('.feed-post-link').innerText;
  }

  private getNewsUrl(post: HTMLElement): string {
    return post.querySelector('.feed-post-link').rawAttributes.href;
  }

  private getNewsDescription(post: HTMLElement): string {
    const descriptionElement = post.querySelector('.feed-post-body-resumo');
    if (descriptionElement == null) {
      return null;
    }

    return descriptionElement.rawText;
  }
}
