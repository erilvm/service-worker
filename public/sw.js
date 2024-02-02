
self.addEventListener('fetch',fuction (event) {
    console.log('SW:', event.request.url);
    //aplicar estrategia del cache
    if (event.request.url.includes('https://fakestoreapi.com/products/1')) {
        const resp = new Response(`{"OK": false, "mensaje:" "Interceptado por el SW"}`);
        event.respodWith(resp)

    }
});