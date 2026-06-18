/* ═══════════════ CUBE STUDIOS - SERVICE WORKER ═══════════════ */
const CACHE_NAME = 'cube-studios-v2';
const urlsToCache = [
    '/CUBE-STUDIOS/',
    '/CUBE-STUDIOS/index.html',
    '/CUBE-STUDIOS/games.html',
    '/CUBE-STUDIOS/simulators.html',
    '/CUBE-STUDIOS/hardware.html',
    '/CUBE-STUDIOS/software.html',
    '/CUBE-STUDIOS/creative.html',
    '/CUBE-STUDIOS/about.html',
    '/CUBE-STUDIOS/contact.html',
    '/CUBE-STUDIOS/blog.html',
    '/CUBE-STUDIOS/css/style.css',
    '/CUBE-STUDIOS/js/main.js',
    '/CUBE-STUDIOS/lib/particles.min.js',
    '/CUBE-STUDIOS/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
            );
        })
    );
});