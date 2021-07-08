var cacheName = "HTWK-K";
var filesToCache = ["./index.html", "./images/logo512.png", "./offline.html"];

// Hinzufügen Install Event-Listener
this.addEventListener("install", function (event) {
  console.log("[Service Worker] Installation wird gestartet");
  event.waitUntil(
    //SW wird nicht installiert solange folgender Code nicht erfolgreich ausgegführt
    caches.open(cacheName).then(function (cache) {
      //Cache öffnen
      console.log("[Service Worker] Dateien werden gecacht");
      return cache.addAll(filesToCache); //Cache werden Ressourcen hinzugefügt
    })
  );
});

this.addEventListener("activate", function (event) {
  console.log("[Service Worker] Aktivierung wird gestartet");
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log(
              "[Service Worker] Veralteter Cache wird gelöscht:",
              key
            );
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// fetch -> was sollen SW mit gecachcten Inhalten tun

this.addEventListener("fetch", function (event) {
  event.respondWith(
    // jede Ressource die vom Netzwerk angefragt wird, mit der des Cache ersetzen falls verfügbar
    caches
      .match(event.request)
      .then(function (resp) {
        return (
          resp ||
          fetch(event.request).then(function (response) {
            //caches.open(cacheName).then(function(cache) {
            //	cache.put(event.request, response.clone());
            //});
            return response;
          })
        );
      })
      .catch(function () {
        return caches.match("/offline.html");
      })
  );
});

/* Stale-while-revalidate Ansatz
 * Seiten müssen nicht aktuellste sein, werden aus Cache geladen
 * im Hintergrund wird offline nach aktuellerer Variante gesucht
 */
/*self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Angeforderte URL:", event.request.url);
  //console.log("Die Ressource wurde aus dem Cache geladen und es wird im Netzwerk nach einer neuen Variante gesucht.");
  event.respondWith(
    (async function () {
      try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(event.request);
        const networkResponsePromise = fetch(event.request);

        event.waitUntil(
          (async function () {
            const networkResponse = await networkResponsePromise;
            await cache.put(event.request, networkResponse.clone());
          })()
        );

        // Return the cached response if we have one, otherwise return the network response.
        return cachedResponse || networkResponsePromise;
      } catch (err) {
		  console.log("Fetch fehlgeschlagen");
        return cache.match("offline.html");
      }
    })()
  );
});

	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				console.log('[Service Worker] Ressource konnte aus dem Cache geladen werden:', event.request.url);
				return response;
			} else {
				console.log('[Service Worker] Ressource wird aus dem Netzwerk geladen:', event.request.url);
				return fetch(event.request);
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
      console.log("Background-Sync durchgeführt");
    })()
  );
});
