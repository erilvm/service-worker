//verifcar si se va a registrar
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg=>{
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        reg.showNotification('Hello from sw')
      }
    })
  }).catch(err => {
  console.log(err)
  })
}