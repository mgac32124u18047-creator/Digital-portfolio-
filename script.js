// Add event listener to each flower item
document.addEventListener("DOMContentLoaded", function () {
  const flowers = document.querySelectorAll(".flower");

  flowers.forEach((flower) => {
    flower.addEventListener("click", function () {
      // Add animation effect on click
      flower.classList.add("animate");

      // Remove animation effect after a short delay
      setTimeout(function () {
        flower.classList.remove("animate");
      }, 500);
    });
  });
});

// Modal functionality for flower details
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");

document.querySelectorAll(".flower img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.textContent = this.alt;
  });
});

// Close modal when clicked outside or on close button
document.getElementById("close-modal").addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (
