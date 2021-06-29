var cacheName = 'HTWK-K';
var filesToCache = [
	'./',
	'./index.html',
	'./public/images/logo512.png',
	'./app.js'
];

self.addEventListener('install', function(pEvent) {
	console.log('[Service Worker] Installation wird gestartet');
	pEvent.waitUntil(
		caches.open(cacheName).then(function(pCache) {
			console.log('[Service Worker] Dateien werden gecacht');
			return pCache.addAll(filesToCache);
		})
	);
});

// Cache first, Network second.
// Ressourcen, die aus dem Netz geholt werden muessen, werden auch noch
// in den Cache gesteckt
self.addEventListener('fetch', function(pEvent) {
	console.log('[Service Worker] Angeforderte URL:', pEvent.request.url);
	pEvent.respondWith(
		caches.match(pEvent.request).then(function(pResponse) {
			if (pResponse) {
				console.log('[Service Worker] Ressource konnte aus dem Cache geladen werden:', pEvent.request.url);
				return pResponse;
			} else {
				console.log('[Service Worker] Ressource wird aus dem Netzwerk geladen:', pEvent.request.url);
				var fetchPromise = fetch(pEvent.request)
				.then(function (networkResponse) {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse});				
				return fetchPromise;
			}
		}).catch(function(pError) {
		        console.error(pError);
// Fehlermeldung ausgeben in Console, falls
	       })
	);       
});
