import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (!/^\/[a-zA-Z0-9_-]+$/.test(base)) throw new Error('Informe NEXT_PUBLIC_BASE_PATH como /nome-do-repositorio');
async function visit(dir) {
  for (const entry of await readdir(dir, {withFileTypes:true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { if(entry.name !== 'vendor') await visit(path); }
    else if (/\.(html|rsc|js|css|json)$/.test(entry.name)) {
      const text = await readFile(path, 'utf8');
      const updated = text.replace(/(?<![\w/-])\/(?:_next|brand)\//g, match => base + match)
        .replace(/(?<![\w/-])\/favicon\.svg/g, base + '/favicon.svg');
      if (updated !== text) await writeFile(path, updated);
    }
  }
}
await visit('dist/client');
await writeFile('dist/client/.nojekyll', '');
console.log('Arquivos preparados para GitHub Pages em ' + base);
