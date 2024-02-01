 //console.log("Hola desde sw")
 //primero vamos hacer una solicitud y que responda con los archivos
 self.addEventListener('fetch', event => {
    //event.respondWith(fetch(event.request.url))
    console.log(event)
 })

 //Interceptor solicitud
 self.addEventListener('fetch', event => {
    if (event.request.url.includes('boston1')) {
        event.respondWith(fetch('logo512.png'))

    }
 })