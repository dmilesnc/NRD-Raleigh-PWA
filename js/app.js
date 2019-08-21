if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((register) => console.log('ServiceWorker is Registered!', register))
        .catch((error) => console.log('WARNING: ServiceWorker is NOT Registered!', error));
}