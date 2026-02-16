const http = require('http');
const { createReadStream } = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm'
};

const server = http.createServer(async (req, res) => {
  try {
    // Normalize and secure the path
    // NOTE: Node's 'url' module is not imported here, relying on a global-like constructor
    const url = new URL(req.url || '/', 'http://localhost');
    let urlPath = decodeURI(url.pathname);
    if (urlPath === '/') urlPath = '/index.html';

    // Prevent path traversal
    const safePath = path.normalize(urlPath).replace(/^([.][.][/\\])+/, '');
    let filePath = path.join(distDir, safePath);

    // Determine target file: file itself, folder index.html, or SPA fallback
    let fileStat;
    try {
      // Use the CJS imported fsPromises.stat
      fileStat = await fsPromises.stat(filePath); 
      if (fileStat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch {
      // If not found, fallback to SPA index.html
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);

    // Long-cache hashed assets (common in Vite builds)
    if (/\.(?:js|css|png|jpe?g|webp|svg|gif|ico|woff2?)$/i.test(ext)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    const stream = createReadStream(filePath);
    stream.on('error', () => {
      res.statusCode = 404;
      res.end('Not Found');
    });
    stream.pipe(res);
  } catch (err) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`SPA server running on http://localhost:${port}`);
});