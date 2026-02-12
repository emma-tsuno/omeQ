const yay = document.getElementById("yayImage");

function showYay() {
  yay.style.opacity = "1";
  yay.style.transition = "all 0.4s ease-out";
  yay.style.transform = "translate(-50%, -50%) scale(1)";
}

document.addEventListener("touchend", () => {
  clearInterval(interval);
  showYay();
});

document.addEventListener("mouseup", () => {
  clearInterval(interval);
  showYay();
});

