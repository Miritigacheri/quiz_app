const popup = document.getElementById("popup");
const hidden = document.getElementById("heading");
const qtn = document.getElementById("showqtn");
const instBtn = document.getElementById("openInst");

instBtn.addEventListener("click", displayInstruction);

const mdlBtn = document.getElementById("mdl-btn");
mdlBtn.addEventListener("click", displayQtn);
function displayInstruction() {
  popup.classList.add("modalOpen");

  hidden.classList.add("headingHide");
}
function displayQtn() {
  window.open("questions.html", "_self");
}
const reset = document.getElementById("restart");
reset.addEventListener("click", displayQtn);
