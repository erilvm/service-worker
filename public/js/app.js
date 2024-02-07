
//saber si soporta mi navegador este tipo de tecnologia
//if(navigator.serviceWorker) {
   // console.log("El navegador sopprta service worker")
//}

//verifcar si se va a registrar
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg=>{
    setTimeout(()=>{
      //Cuando tengo wifi
      reg.sync.register('Enviar fotos')
      //Una vez que yo vuelva a prender mi wifi
      console.log('Se enviaron las fotos al sever');
    }, 5000)
  })
  .catch(err => {
    console.log(err);
  })
  //.then(reg => console.log('Service worker: Registerr'))
  //.catch(err =>console.log('Servoice worker register: Error: ${'))
}

//fetch('https://fakestoreapi.com/products/1')
//.then(resp => resp.json())
//.then(console.log)
