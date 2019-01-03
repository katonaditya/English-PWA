var dataCacheName = 'template-pwa';
var cacheName = 'template-pwa';
var filesToCache = [
  '/',
 /* "./fonts", */

 "./images",
 "./images/icons",
 "./images/icons/icon-128x128.png",
 "./images/icons/icon-144x144.png",
 "./images/icons/icon-152x152.png",
 "./images/icons/icon-192x192.png",
 "./images/icons/icon-256x256.png",
 "./index.html",
 "./generic.html",
 "./manifest.json",
 "./service-worker.js",


 /* "./scripts/materialize.js", */

 /*"./styles",
 "./styles/materialize.css",
 "./styles/style.css", */

 "./images/banner.jpg","./images/A.jpg","./images/Aq.jpg","./images/B.jpg","./images/Banana.jpg","./images/C.jpg","./images/Cherry.jpg","./images/D.jpg",
 "./images/Dragon.jpg","./images/E.jpg","./images/Elephant.jpg","./images/F.jpg","./images/Fish.jpg","./images/G.jpg","./images/Giraffe.jpg",
 "./images/H.jpg","./images/Horse.jpg","./images/I.jpg","./images/Iguana.jpg","./images/J.jpg","./images/Jaguar.jpg","./images/K.jpg",
 "./images/Kangaroo.jpg","./images/L.jpg","./images/Lion.jpg","./images/M.jpg","./images/Mouse.jpg","./images/N.jpg","./images/Nut.jpg",
 "./images/O.jpg","./images/Orange.jpg","./images/P.jpg","./images/Penguin.jpg","./images/Q.jpg","./images/Qur'an.jpg","./images/R.jpg",
 "./images/Rabbit.jpg","./images/S.jpg","./images/Squirel.jpg","./images/T.jpg","./images/Tiger.jpg","./images/U.jpg","./images/Umbrella.jpg",
 "./images/V.jpg","./images/Vase.jpg","./images/W.jpg","./images/Wolf.jpg","./images/X.jpg","./images/Xerophyte.jpg","./images/Y.jpg",
 "./images/Yoyo.jpg","./images/Z.jpg","./images/Zebra.jpg",

 "./sound",
 "./sound/A.mp3","./sound/Apple.mp3","./sound/B.mp3","./sound/Banana.mp3","./sound/C.mp3","./sound/Cherry.mp3","./sound/D.mp3",
 "./sound/Dragon.mp3","./sound/E.mp3","./sound/Elephant.mp3","./sound/F.mp3","./sound/Fish.mp3","./sound/G.mp3","./sound/Giraffe.mp3",
 "./sound/H.mp3","./sound/Horse.mp3","./sound/I.mp3","./sound/Iguana.mp3","./sound/J.mp3","./sound/Jaguar.mp3","./sound/K.mp3",
 "./sound/Kangaroo.mp3","./sound/L.mp3","./sound/Lion.mp3","./sound/M.mp3","./sound/Mouse.mp3","./sound/N.mp3","./sound/Nut.mp3",
 "./sound/O.mp3","./sound/Orange.mp3","./sound/P.mp3","./sound/Penguin.mp3","./sound/Q.mp3","./sound/Qur'an.mp3","./sound/R.mp3",
 "./sound/Rabbit.mp3","./sound/S.mp3","./sound/Squirel.mp3","./sound/T.mp3","./sound/Tiger.mp3","./sound/U.mp3","./sound/Umbrella.mp3",
 "./sound/V.mp3","./sound/Vase.mp3","./sound/W.mp3","./sound/Wolf.mp3","./sound/X.mp3","./sound/Xerophyte.mp3","./sound/Y.mp3",
 "./sound/Yoyo.mp3","./sound/Z.mp3","./sound/Zebra.mp3",

 "./assets",
 /*"./assets/fonts/roboto",
 "./assets/fonts/roboto/Roboto-Bold.woff",
 "./assets/fonts/roboto/Roboto-Bold.woff2",
 "./assets/fonts/roboto/Roboto-Light.woff",
 "./assets/fonts/roboto/Roboto-Light.woff2",
 "./assets/fonts/roboto/Roboto-Medium.woff",
 "./assets/fonts/roboto/Roboto-Medium.woff2",
 "./assets/fonts/roboto/Roboto-Regular.woff",
 "./assets/fonts/roboto/Roboto-Regular.woff2",
 "./assets/fonts/roboto/Roboto-Thin.woff",
 "./assets/fonts/roboto/Roboto-Thin.woff2", */
 
 "./assets/scripts/app.js",
 "./assets/scripts/jquery-3.3.1.js",

 "./assets/vendor/jquery/jquery.js",
 "./assets/vendor/jquery/jquery.min.js",
 "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
 "./assets/vendor/bootstrap/bootstrap.js",
 "./assets/vendor/bootstrap/css/bootstrap.min.css",

 /*"./assets", */
 "./assets/css/images/arrow.svg",
 "./assets/css/images/bars.svg",
 "./assets/css/images/close.svg",
 /* "./assets/css/font-awesome.min.css",*/
 "./assets/css/main.css",
 "./assets/css/noscript.css",

 /*"./assets/fonts/FontAwesome.otf",
 "./assets/fonts/fontawesome-webfont.eot",
 "./assets/fonts/fontawesome-webfont.svg",
 "./assets/fonts/fontawesome-webfont.ttf",
 "./assets/fonts/fontawesome-webfont.woff",
 "./assets/fonts/fontawesome-webfont.woff2", */

 "./assets/js/breakpoints.min.js",
 "./assets/js/browser.min.js",
 "./assets/js/jquery.min.js",
 "./assets/js/jquery.scrollex.min.js",
 "./assets/js/jquery.scrolly.min.js",
 "./assets/js/main.js",
 "./assets/js/util.js"

 /*"./assets/sass/libs/_breakpoints.scss",
 "./assets/sass/libs/_functions.scss",
 "./assets/sass/libs/_html-grid.scss",
 "./assets/sass/libs/_mixins.scss",
 "./assets/sass/libs/_vars.scss",
 "./assets/sass/libs/_vendor.scss",
 "./assets/sass/main.scss",
 "./assets/sass/noscript.scss",*/




];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
/*self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response){
        return response;
      } else {
        return fetch(e.request)
        .then(function(res) {
          return caches.open(CACHE_DYNAMIC_NAME)
          .then(function(cache){
            cache.put(e.request.url, res.clone());
            return res;
          })
        })
      .catch(function(err) {
        return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
        .then(function(cache){
          return cache.match('/offline.html');
        });
      });
      }
    })
  );
});*/