// install service worker
self.addEventListener('install', event => {
    console.log('Service worker has been installed');
});

// activate event
self.addEventListener('activate', event => {
    console.log('Service worker has been activated')
});

// fetch event
self.addEventListener('fetch', event => {
    console.log('fetch event', event);
});