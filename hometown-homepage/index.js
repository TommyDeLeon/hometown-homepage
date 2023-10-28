let sections = document.getElementsByTagName("section");
// Tracks index of current section
let currentSectionIndex = 0;

document.addEventListener("wheel", (e) => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // Wheel up
    sections[currentSectionIndex].className = "";
    currentSectionIndex--;
    sections[currentSectionIndex].className = "active";
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // Wheel down
    sections[currentSectionIndex].className = "";
    currentSectionIndex++;
    sections[currentSectionIndex].className = "active";
  }
});
