
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
 