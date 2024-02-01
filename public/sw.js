//Responder con lo que contiene la solicitud

self.addEventListener(fetch, event  => {
   event.respond(selft.fetch(event.request)
   )
   console.log(event.request);
   })

   //interceptar la solicitud

   self.addEventListener('fetch', event => {
       if(event.request.url.includes ('boston1')){
           event.respondWith(fetch('logo512.png'))
  
   }
   })