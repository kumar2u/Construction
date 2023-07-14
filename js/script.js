
// Toggle nav bar for small screen

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active2");
    navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active2");
        navmenu.classList.remove("active");
    })
);

document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        // Show the button when the user scrolls down 100px from the top
        backToTopBtn.style.display = 'block';
      } else {
        // Hide the button when the user is near the top
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', function() {
      // Scroll to the top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });




