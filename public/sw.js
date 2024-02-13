
//ciclo de vida del sw
//1-Instalacion

self.addEventListener('install', event => {
    console.log('Sw: instalado')
    //Simular instalacion de caches
    const instalacion = new Promise((resolve, reject) => {
       setTimeout(() => {
          console.log('SW: Instalacion terminada')
          
       self.skipWaiting()
       resolve()
       })
       
    })
 })
 
 //2-Activado 
 self.addEventListener('activate', event => {
    console.log('Sw: Activado y controlando la app')
 })
 
 //Fech
 self.addEventListener('activate', event => {
    console.log('Sw: Activado y controlando la app')
 })
 
 
 self.addEventListener('fetch',function (event) {
   //console.log('SW: fetch', event.request.url);

//if(event.request.url.includes('https://fakestoreapi.com/products/') ){
   //const resp = new Response('{"ok": false, "mensaje": "interceptado por el sw"}');
   //event.respondWith(resp);
//}
});

//Sync:recuperamos la conexion de internet
//self.addEventListener('sync', event => {
   //console.log('Tenemos cnexion');
   //console.log(event);
//console.log(event.tag);
//})

// Push
self.addEventListener('push', event => {
   console.log('Notificacion recibida ');
});

