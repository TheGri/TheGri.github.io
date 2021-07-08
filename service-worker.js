var cacheName = "HTWK-K";
var filesToCache = ["./index.html", "./images/logo512.png", "./offline.html"];

// Hinzufügen Install Event-Listener
self.addEventListener("install", function (event) {
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

self.addEventListener("activate", function (event) {
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

self.addEventListener("fetch", function (event) {
  event.respondWith(
    // jede Ressource die vom Netzwerk angefragt wird, mit der des Cache ersetzen falls verfügbar
    caches
      .match(event.request)
      .then(function (resp) {
        console.log("[Service Worker] Angeforderte URL:", event.request.url);
        return (
          resp ||
          fetch(event.request).then(function (response) {
            console.log("Ressource wird aus Netzwerk geladen.");
            return response;
          })
        );
      })
      .catch(function () {
        console.log("Keine Möglichkeit an Ressource zu gelangen. Offlineseite wird angezeigt.");
        return caches.match("/offline.html");
      })
  );
});
