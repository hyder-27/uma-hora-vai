const slider = document.querySelector(".slider");

let pressed = false;
let startX = 0;

slider.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});
slider.addEventListener("mouseleave", function (e) {
  pressed = false;
});
window.addEventListener("mouseup", function (e) {
  pressed = false;
  startX = e.clientX;
  slider.style.cursor = "grab";
});
slider.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});
