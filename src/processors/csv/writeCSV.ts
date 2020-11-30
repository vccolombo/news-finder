import * as fastcsv from 'fast-csv';
import * as fs from 'fs';

export async function writeCSV<T>(
  arg: Array<T>,
  path: string,
  separator = ',',
): Promise<boolean> {
  const ws = fs.createWriteStream(path);
  const options = {
    delimiter: separator,
  };
  fastcsv.write(arg, options).pipe(ws);

  return true;
}
