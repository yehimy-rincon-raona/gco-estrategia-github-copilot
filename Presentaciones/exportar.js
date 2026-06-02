/**
 * exportar.js
 * Genera presentacion-gco.html — copia 100% autónoma de index.html
 * Incrusta fuentes, imágenes y logos como base64.
 * Ejecutar: node exportar.js
 */

const fs   = require('fs');
const path = require('path');

const ROOT   = path.join(__dirname, '..');
const INPUT  = path.join(ROOT, 'index.html');
const OUTPUT = path.join(__dirname, 'presentacion-gco.html');

const MIME = {
  png:  'image/png',
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  svg:  'image/svg+xml',
  gif:  'image/gif',
  webp: 'image/webp',
  woff: 'font/woff',
  woff2:'font/woff2',
  ttf:  'font/ttf',
  eot:  'application/vnd.ms-fontobject',
};

function embed(filePath) {
  const full = path.join(ROOT, filePath);
  if (!fs.existsSync(full)) {
    console.warn('  ⚠  No encontrado:', filePath);
    return null;
  }
  const ext  = path.extname(filePath).slice(1).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const b64  = fs.readFileSync(full).toString('base64');
  console.log('  ✓', filePath);
  return `data:${mime};base64,${b64}`;
}

console.log('\n📦 Generando presentacion-gco.html...\n');

let html = fs.readFileSync(INPUT, 'utf8');

const IMG  = 'png|jpg|jpeg|svg|gif|webp';
const FONT = 'woff2|woff|ttf|eot';
const ALL  = `${IMG}|${FONT}`;

// 1. url('...') y url("...") en CSS (fuentes + imágenes de fondo)
html = html.replace(
  new RegExp(`url\\(['"]([^'"]+\\.(?:${ALL}))['"]\\)`, 'g'),
  (_, p) => { const d = embed(p); return d ? `url('${d}')` : `url('${p}')`; }
);

// 2. src="..." en etiquetas <img>
html = html.replace(
  new RegExp(`src="((?!data:|https?:)[^"]+\\.(?:${IMG}))"`, 'g'),
  (_, p) => { const d = embed(p); return d ? `src="${d}"` : `src="${p}"`; }
);

// 3. href="..." en <link rel="icon"> (solo archivos con extensión)
html = html.replace(
  new RegExp(`href="((?!#|data:|https?:)[^"]+\\.(?:${IMG}))"`, 'g'),
  (_, p) => { const d = embed(p); return d ? `href="${d}"` : `href="${p}"`; }
);

fs.writeFileSync(OUTPUT, html, 'utf8');

const mb = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(1);
console.log(`\n✅ Listo: presentacion-gco.html (${mb} MB)`);
console.log('   Ruta:', OUTPUT);
