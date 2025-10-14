window.addEventListener("DOMContentLoaded", function () {
const trailer = document.getElementById("trailer");
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

window.onmousemove = e => {
  targetX = e.clientX;
  targetY = e.clientY;
};

function animate() {
  // 0.1 determines the speed of catch-up (smaller = more delay)
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  const rect = trailer.getBoundingClientRect();
  const trailerWidth = rect.width;
  const trailerHeight = rect.height;

  trailer.style.transform = `translate(${currentX - trailerWidth / 2}px, ${currentY - trailerHeight / 2}px)`;
  requestAnimationFrame(animate);
}
animate();

});
