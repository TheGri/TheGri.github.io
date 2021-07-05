var cacheName = 'HTWK-K';
var filesToCache = [
	'./index.html',
	'./images/logo512.png'
];

// Unterschied self. vs. this. ???
self.addEventListener('install', function(pEvent) {
	console.log('[Service Worker] Installation wird gestartet');
	pEvent.waitUntil(
		caches.open(cacheName).then(function(pCache) {
			console.log('[Service Worker] Dateien werden gecacht');
			return pCache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate', function(pEvent) {
	console.log('[Service Worker] Aktivierung wird gestartet');
	pEvent.waitUntil(
		caches.keys().then(function(pKeys) {
			return Promise.all(pKeys.map(function(pKey) {
				if (pKey !== cacheName) {
					console.log('[Service Worker] Veralteter Cache wird gelöscht:', pKey);
					return caches.delete(pKey);
				}
			}));
		})
	);
});

/* Stale-while-revalidate Ansatz
 * Seiten müssen nicht aktuellste sein, werden aus Cache geladen
 * im Hintergrund wird offline nach aktuellerer Variante gesucht
 */
self.addEventListener('fetch', (event) => {
	console.log("[Service Worker] Angeforderte URL:", event.request.url);
	console.log("Die Ressource wurde aus dem Cache geladen und es wird im Netzwerk nach einer neuen Variante gesucht.");
	event.respondWith(async function() {
		const cache = await caches.open(cacheName);
		const cachedResponse = await cache.match(event.request);
		const networkResponsePromise = fetch(event.request);
		event.waitUntil(async function() {
			const networkResponse = await networkResponsePromise;
			await cache.put(event.request, networkResponse.clone());
		}());
		// Return the cached response if we have one, otherwise return the network response.
		if (cachedResponse) return cachedResponse;

		try {
			return await networkResponsePromise;
		} catch (err) {
			return caches.match("/offline.html");
		}
	}());
});
/*	pEvent.respondWith(
		caches.match(pEvent.request).then(function(pResponse) {
			if (pResponse) {
				console.log('[Service Worker] Ressource konnte aus dem Cache geladen werden:', pEvent.request.url);
				return pResponse;
			} else {
				console.log('[Service Worker] Ressource wird aus dem Netzwerk geladen:', pEvent.request.url);
				return fetch(pEvent.request);
			}
		})
	);
});*/

// Background Sync
self.addEventListener("sync", (event) => {
	event.waitUntil(
	  (async function () {
		const cache = await caches.open(cacheName);
		await cache.add(filesToCache);
	  })()
	);
  });