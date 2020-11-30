import fetch from 'node-fetch';
import { Logger } from '../../logs/Logger';

export async function fetchSiteHtml(url: string): Promise<string> {
  let result: string;
  await fetch(url)
    .then((res) => res.text())
    .then((body) => {
      result = body;
    })
    .catch((err) => {
      Logger.logError('fetchSiteHtml', err);
      result = null;
    });

  return result;
}
