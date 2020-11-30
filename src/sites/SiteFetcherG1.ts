import { SiteFetcher } from './SiteFetcher';
import { News } from '../news/News';
import { HTMLElement, parse } from 'node-html-parser';
import { fetchSiteHtml } from './fetchSiteHtml';

export class SiteFetcherG1 extends SiteFetcher {
  url = 'https://g1.globo.com/';

  async fetch(): Promise<Array<News>> {
    const html = await fetchSiteHtml(this.url);
    if (html === null) {
      return null;
    }

    this.news = this.parseNews(html);
    return this.news;
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
    if (descriptionElement === null) {
      return null;
    }

    return descriptionElement.rawText;
  }
}
