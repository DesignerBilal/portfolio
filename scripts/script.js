

document.addEventListener("DOMContentLoaded", () => {
  // Hide the loader
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease-out";

    // Completely remove loader after transition
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 1000);
  }, 2000); // Optional delay for better visuals
});



// JavaScript for toggling the navbar menu and hamburger animation
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');
});




//Circle

const circle = document.getElementById('circle');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const smoothFactor = 0.1; // Adjust for smoother or faster movement

// Update the target position on mousemove
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX - 75; // Offset to center the circle
  mouseY = e.clientY - 75;
});

// Smoothly animate the circle to follow the cursor
function animate() {
  currentX += (mouseX - currentX) * smoothFactor;
  currentY += (mouseY - currentY) * smoothFactor;

  circle.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate); // Continue the animation
}

animate();



