if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker registered", reg))
  }