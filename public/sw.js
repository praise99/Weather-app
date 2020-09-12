const staticCacheName = 'site-static'
const assets = [
  '/',
  'index.html',
  'app.js',
  'script.js',
  '/public/images/favicon-16x16.png',
  '/public/images/favicon-32x32.png',
  '/public/images/android-chrome-192x192.png',
  'public/images/android-chrome-256x256.png',
  'public/images/apple-touch-icon.png',
  'public/images/safari-pinned-tab.svg',
  'public/images/unknown.png',
  'public/images/01d.png',
  'public/images/01n.png',
  'public/images/02d.png',
  'public/images/02n.png',
  'public/images/03d.png',
  'public/images/03n.png',
  'public/images/04d.png',
  'public/images/04n.png',
  'public/images/09d.png',
  'public/images/09n.png',
  'public/images/10d.png',
  'public/images/10n.png',
  'public/images/11d.png',
  'public/images/11n.png',
  'public/images/13d.png',
  'public/images/13n.png',
  'public/images/50d.png',
  'public/images/50n.png', 
  '/public/css/query.css',
  '/public/css/style.css',
  'public/favicon.ico',
  'public/mstile-150x150.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'

];
// install event
self.addEventListener('install', evt => {
 // console.log('service worker installed');
 evt.waitUntil(
  caches.open(staticCacheName).then((cache) => {
    console.log('caching shell assets');
    cache.addAll(assets);
  })
);
});

// activate  event
self.addEventListener('activate', evt => {
 // console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

/*self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("airhorner").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/index.html?homescreen=1",
        "/?homescreen=1",
        "/css/style.css",
        "/css/query.css",
        "/script.js",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});*/