// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the button when the user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
