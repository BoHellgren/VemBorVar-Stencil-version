importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");

const workboxSW = new self.WorkboxSW();

workboxSW.precache([]);

// my custom service worker code

self.addEventListener('push', function (e) {

    var body;
    if (e.data) {
      body = e.data.text();
    } else {
      body = 'Hälsningar från bostadsrättsföreningen.';
    };
  
    var options = {
      body: body,
      icon: 'assets/imgs/logo.png',
      vibrate: [200, 100, 200],
      tag: 1,
      renotify: true,
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '-push-notification'
      }
      
    };
    e.waitUntil(
      self.registration.showNotification('Brf Husarvikens Strand', options)
    );
  })