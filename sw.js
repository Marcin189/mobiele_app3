self.addEventListener('fetch', function(event) {
    // Dit zorgt ervoor dat Chrome de app als installeerbaar ziet
    event.respondWith(
        fetch(event.request).catch(function() {
            return new Response("Offline");
        })
    );
});
