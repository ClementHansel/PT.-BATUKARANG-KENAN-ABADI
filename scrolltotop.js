// Scroll to top Button
// Select the button element
const backToTopButton = document.getElementById("back-to-top");

// Function to scroll to the top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show or hide the button depending on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
