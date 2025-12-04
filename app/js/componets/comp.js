// Запрет событий масштабирования 'gesturestart'
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});

/* Предотвращение масштабирования через 'touchmove' в старых версиях iOS */
document.addEventListener('touchmove', function(event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });

