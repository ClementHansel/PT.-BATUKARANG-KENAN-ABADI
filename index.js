// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Hero
// JavaScript for controlling the carousel functionality
let currentIndex = 0; // Keeps track of the current image index
const images = document.querySelectorAll("#hero-carousel-images img");
const totalImages = images.length;

// Function to move to the next image
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Function to move to the previous image
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Update the carousel position based on currentIndex
function updateCarousel() {
  const carouselImages = document.getElementById("hero-carousel-images");
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set up autoplay
let autoplay = setInterval(nextSlide, 3000); // Change image every 3 seconds

// Attach event listeners to the previous and next buttons
document.getElementById("heroNextButton").addEventListener("click", () => {
  clearInterval(autoplay); // Stop autoplay when a button is clicked
  nextSlide();
  autoplay = setInterval(nextSlide, 3000); // Restart autoplay
});

document.getElementById("heroPreviousButton").addEventListener("click", () => {
  clearInterval(autoplay); // Stop autoplay when a button is clicked
  prevSlide();
  autoplay = setInterval(nextSlide, 3000); // Restart autoplay
});

// Ensure the carousel auto-advances every 3 seconds

// AOS (Animate On Scroll) initialization
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    once: true, // Run animations only once when scrolling into view
    duration: 1000, // Animation duration
  });
});

// solutions

document.addEventListener("DOMContentLoaded", function () {
  let solutionsCurrentIndex = 0; // Keeps track of the current image index
  const solutionsImages = [
    "Assets/Index/HP ISMS.webp",
    "Assets/Index/HP WIM.webp",
    "Assets/Index/HP - ISHMS.webp",
    "Assets/Index/HP VPMS 1.webp",
  ]; // Array of image URLs for the carousel

  // Get DOM elements
  const solutionsMainImage = document.getElementById("solutions-mainImage"); // Main image element
  const solutionsThumbnails = document.querySelectorAll(
    "#solutions-thumbnails img"
  ); // Thumbnails container
  const solutionsPrevBtn = document.getElementById("solutions-prevBtn"); // Previous button
  const solutionsNextBtn = document.getElementById("solutions-nextBtn"); // Next button

  // Function to update the main image based on the current index
  function solutionsUpdateMainImage() {
    solutionsMainImage.src = solutionsImages[solutionsCurrentIndex]; // Update the main image
    // Highlight the selected thumbnail
    solutionsThumbnails.forEach((thumb, index) => {
      if (index === solutionsCurrentIndex) {
        thumb.classList.add("border-2", "border-blue-500"); // Add a border to the selected thumbnail
      } else {
        thumb.classList.remove("border-2", "border-blue-500"); // Remove the border from unselected thumbnails
      }
    });
  }

  // Function to move to the next image
  function solutionsNextSlide() {
    solutionsCurrentIndex =
      (solutionsCurrentIndex + 1) % solutionsImages.length; // Increment index with wrap-around
    solutionsUpdateMainImage(); // Update the main image when the next button is clicked
  }

  // Function to move to the previous image
  function solutionsPrevSlide() {
    solutionsCurrentIndex =
      (solutionsCurrentIndex - 1 + solutionsImages.length) %
      solutionsImages.length; // Decrement index with wrap-around
    solutionsUpdateMainImage(); // Update the main image when the previous button is clicked
  }

  // Event listener for the next button (next image)
  if (solutionsNextBtn) {
    solutionsNextBtn.addEventListener("click", solutionsNextSlide);
  }

  // Event listener for the previous button (previous image)
  if (solutionsPrevBtn) {
    solutionsPrevBtn.addEventListener("click", solutionsPrevSlide);
  }

  // Event listeners for the thumbnails
  solutionsThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      solutionsCurrentIndex = parseInt(e.target.dataset.index); // Get the index of the clicked thumbnail
      solutionsUpdateMainImage(); // Update the main image to the selected thumbnail
    });
  });

  // Initialize the carousel with the first image
  solutionsUpdateMainImage();
});

// Products

document.addEventListener("DOMContentLoaded", function () {
  let productCurrentIndex = 0; // Keeps track of the current image index
  const productImages = [
    "assets/index/HP PRODUCT MONITORING.webp",
    "assets/index/HP PRODUC SENSORS.webp",
    "assets/index/HP PRODUCT ACCESS MGMT.webp",
    "assets/index/HP PRODUCT PARKING MGMT.webp",
  ]; // Array of image URLs for the carousel

  // Get DOM elements
  const productMainImage = document.getElementById("product-mainImage"); // Main image element
  const productThumbnails = document.querySelectorAll(
    "#product-thumbnails img"
  ); // Thumbnails container
  const productPrevBtn = document.getElementById("product-prevBtn"); // Previous button
  const productNextBtn = document.getElementById("product-nextBtn"); // Next button

  // Function to update the main image based on the current index
  function productUpdateMainImage() {
    productMainImage.src = productImages[productCurrentIndex]; // Update the main image
    // Highlight the selected thumbnail
    productThumbnails.forEach((thumb, index) => {
      if (index === productCurrentIndex) {
        thumb.classList.add("border-2", "border-blue-500"); // Add a border to the selected thumbnail
      } else {
        thumb.classList.remove("border-2", "border-blue-500"); // Remove the border from unselected thumbnails
      }
    });
  }

  // Function to move to the next image
  function productNextSlide() {
    productCurrentIndex = (productCurrentIndex + 1) % productImages.length;
    productUpdateMainImage(); // Update the main image when the next button is clicked
  }

  // Function to move to the previous image
  function productPrevSlide() {
    productCurrentIndex =
      (productCurrentIndex - 1 + productImages.length) % productImages.length;
    productUpdateMainImage(); // Update the main image when the previous button is clicked
  }

  // Event listener for the next button (next image)
  if (productNextBtn) {
    productNextBtn.addEventListener("click", productNextSlide);
  }

  // Event listener for the previous button (previous image)
  if (productPrevBtn) {
    productPrevBtn.addEventListener("click", productPrevSlide);
  }

  // Event listeners for the thumbnails
  productThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      productCurrentIndex = parseInt(e.target.dataset.index); // Get the index of the clicked thumbnail
      productUpdateMainImage(); // Update the main image to the selected thumbnail
    });
  });

  // Initialize the carousel with the first image
  productUpdateMainImage();
});

// Achievements
// Function to animate the counter numbers
function animateCounter(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 50); // Determine how much to increment per frame (50 ms interval)
  const step = () => {
    if (start < target) {
      start += increment;
      element.innerText = Math.floor(start); // Update text with rounded number
      requestAnimationFrame(step); // Request the next frame
    } else {
      element.innerText = target; // Ensure it ends exactly at the target number
    }
  };
  requestAnimationFrame(step); // Start the animation
}

// Intersection Observer to trigger counter animation when section comes into view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Select the counter elements
        const milestone1 = document.getElementById("milestone1-counter");
        const milestone2 = document.getElementById("milestone2-counter");
        const milestone3 = document.getElementById("milestone3-counter");
        const milestone4 = document.getElementById("milestone4-counter");

        // Start the animation for each counter when the section comes into view
        animateCounter(milestone1, 2, 2000); // Target: 2, Duration: 2000ms (2 seconds)
        animateCounter(milestone2, 5, 2000); // Target: 5, Duration: 2000ms
        animateCounter(milestone3, 7, 2000); // Target: 7, Duration: 2000ms
        animateCounter(milestone4, 20, 2000); // Target: 20, Duration: 2000ms

        // Stop observing the section after the animation has started
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the achievement counter section
const achievementSection = document.getElementById("achievement-counter");
observer.observe(achievementSection);

// Projects
const projectsCarouselInner = document.getElementById(
  "projects-carousel-inner"
);
const projectsNextButton = document.getElementById("projects-next-button");
const projectsPrevButton = document.getElementById("projects-prev-button");
const projectsImages = document.querySelectorAll(".projects-carousel-image");

let projectsCurrentIndex = 0;
const projectsTotalImages = projectsImages.length;

function projectsUpdateCarousel() {
  const offset = -(projectsCurrentIndex * 100); // Calculate offset in percentage
  projectsCarouselInner.style.transform = `translateX(${offset}%)`;
}

function projectsNextSlide() {
  projectsCurrentIndex++;
  if (projectsCurrentIndex >= projectsTotalImages - 1) {
    setTimeout(() => {
      projectsCarouselInner.classList.remove("transition-transform");
      projectsCurrentIndex = 0;
      projectsUpdateCarousel();
    }, 700); // Match transition duration
  }
  projectsUpdateCarousel();
  projectsCarouselInner.classList.add("transition-transform");
}

function projectsPrevSlide() {
  if (projectsCurrentIndex <= 0) {
    projectsCurrentIndex = projectsTotalImages - 2;
    projectsCarouselInner.classList.remove("transition-transform");
    projectsUpdateCarousel();
  }
  setTimeout(() => {
    projectsCarouselInner.classList.add("transition-transform");
    projectsCurrentIndex--;
    projectsUpdateCarousel();
  }, 0);
}

projectsNextButton.addEventListener("click", projectsNextSlide);
projectsPrevButton.addEventListener("click", projectsPrevSlide);

setInterval(projectsNextSlide, 3000); // Auto-slide every 3 seconds

// Contacts Section
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-us-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Basic form validation (check for empty fields)
    const formData = new FormData(contactForm);
    let isValid = true;

    formData.forEach((value, key) => {
      if (!value) {
        isValid = false;
        alert(`${key} is required!`);
      }
    });

    if (isValid) {
      // Handle form submission (e.g., AJAX or API call)
      alert("Form submitted successfully!");

      // Optionally, reset the form after submission
      contactForm.reset();
    }
  });
});

// Whatsapp

// Get references to the button and the chat popup
const whatsappBtn = document.getElementById("whatsapp-btn");
const chatPopup = document.getElementById("chat-popup");
const closePopup = document.getElementById("close-popup");

// Flag to track if the popup is open
let isPopupOpen = false;

// Add event listener for clicking the WhatsApp button
whatsappBtn.addEventListener("click", () => {
  if (!isPopupOpen) {
    // On click, display the chat popup and keep the button stretched
    chatPopup.classList.remove("hidden");
    whatsappBtn.classList.add("w-auto"); // Keep the button stretched
    isPopupOpen = true;
  }
});

// Add event listener for closing the chat popup
closePopup.addEventListener("click", () => {
  // Hide the chat popup and return the button to its normal state
  chatPopup.classList.add("hidden");
  whatsappBtn.classList.remove("w-auto"); // Return to initial size
  isPopupOpen = false;
});
