
//saber si soporta mi navegador este tipo de tecnologia
//if(navigator.serviceWorker) {
   // console.log("El navegador sopprta service worker")
//}

//verifcar si se va a registrar
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  //.then(reg => console.log('Service worker: Registerr'))
  //.catch(err =>console.log('Servoice worker register: Error: ${'))
}

fetch('https/productos')