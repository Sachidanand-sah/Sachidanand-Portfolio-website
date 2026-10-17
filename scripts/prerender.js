// Injects the server-rendered app into dist/index.html so content paints before JS loads.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const indexPath = path.join(root, 'dist', 'index.html');

const { render } = await import(pathToFileURL(serverEntry).href);
const html = fs.readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('Root marker not found in dist/index.html');

fs.writeFileSync(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('Pre-rendered dist/index.html');
