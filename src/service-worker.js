/* eslint-disable */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/(.*)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'jsonplaceholder',
    method: 'GET',
    cacheableResponse: {
      statuses: [0, 200],
    },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

self.addEventListener('push', (event) => {
  let pushMessage = event.data.text();
  const options = {
    body: pushMessage,
    icon: './img/icons/apple-touch-icon-60x60.png',
    image: './img/icons/apple-touch-icon-60x60.png',
    vibrate: [200, 100, 200, 100],
    tag: 'vibration-sample',
  };

  event.waitUntil(self.registration.showNotification(pushMessage, options));
});

self.addEventListener('notificationclick', (event) => {
  const origin = event.currentTarget.location.origin;
  const route = '/#/listing';
  const url = origin + route

  event.notification.close();

  const promiseChain = clients.openWindow(url);
  event.waitUntil(promiseChain);
});
