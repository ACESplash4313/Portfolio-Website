$(function() {
  let images = $('#slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    images.eq(currentIndex).fadeOut(1000);
    currentIndex = (currentIndex + 1) % images.length;
    images.eq(currentIndex).fadeIn(1000);
  }, 7000); // Change image every 7 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");

      // If it's an external link (another page)
      if (href && !href.startsWith("#")) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = href;
        }, 300); // match CSS transition time
      }
    });
  });
});