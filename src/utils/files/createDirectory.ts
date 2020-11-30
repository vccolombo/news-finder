import * as fs from 'fs';
import * as path from 'path';

export async function createDirectory(filePath: string): Promise<string> {
  return fs.promises.mkdir(path.dirname(filePath), { recursive: true });
}
