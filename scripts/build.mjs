import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceFilePath = resolve(packageRoot, 'src/limbo.css');
const sourceCss = `${(await readFile(sourceFilePath, 'utf8')).trim()}\n`;
const minifiedCss = `${sourceCss
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\(\s+/g, '(')
  .replace(/\s+\)/g, ')')
  .replace(/\s*([{}:;,>+~])\s*/g, '$1')
  .replace(/;}/g, '}')
  .trim()}\n`;

const generatedFiles = [
  ['limbo.css', sourceCss],
  ['limbo.min.css', minifiedCss],
  ['sass/_limbo.scss', sourceCss],
  ['less/limbo.less', sourceCss],
];

await Promise.all(
  generatedFiles.map(async ([filePath, fileContent]) => {
    const absoluteFilePath = resolve(packageRoot, filePath);

    await mkdir(dirname(absoluteFilePath), { recursive: true });
    await writeFile(absoluteFilePath, fileContent);
  }),
);
