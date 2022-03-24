self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./css/styles.css", "./css/navbar.css", "./img/icon192.png"])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
});