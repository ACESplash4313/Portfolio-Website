$(function() {
  let images = $('#slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    images.eq(currentIndex).fadeOut(1000);
    currentIndex = (currentIndex + 1) % images.length;
    images.eq(currentIndex).fadeIn(1000);
  }, 7000); // Change image every 7 seconds
});
