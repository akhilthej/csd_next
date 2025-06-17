// public/service-worker.js
self.addEventListener('push', function(event) {
  const data = event.data.json();
  const title = data.title || 'New Notification';
  const options = {
    body: data.body || 'You have a new message.',
    icon: '/icon.png', // Path to your notification icon
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
