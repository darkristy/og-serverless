import { createHash } from 'crypto';
import { join } from 'path';
import { tmpdir } from 'os';
import { writeFile } from 'fs';
import { promisify } from 'util';

const promiseWriteFile = promisify(writeFile);

const writeTempFile = async (fileName: string, html: string) => {
  const hashedFileName = `${createHash('md5')
    .update(fileName)
    .digest('hex')}.html`;

  const filePath = join(tmpdir(), hashedFileName);

  await promiseWriteFile(filePath, html);

  return filePath;
};

export default writeTempFile;
