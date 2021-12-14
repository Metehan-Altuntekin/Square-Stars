const specialiser = document.getElementById("specialiser");
const specialiserButton = document.getElementById("hide-button");
const arrowParts = specialiserButton.childNodes;
const arrowPart1 = arrowParts[0];
const arrowPart2 = arrowParts[1];

specialiserButton.addEventListener("click", HideShowSpecialise);

var isSpecialiserShown = true;
function HideShowSpecialise() {
  if (isSpecialiserShown == true) {
    specialiser.style.transition = "1s"

    //This whole mess here is subtracting height and margins of the button from the container
    specialiser.style.bottom = -(GetRawNumber(getComputedStyle(specialiser, null).getPropertyValue("height")) - GetRawNumber(getComputedStyle(specialiserButton, null).getPropertyValue("height")) - 2 * GetRawNumber(getComputedStyle(specialiserButton, null).getPropertyValue("margin"))) + "px"

    arrowPart1.style.left = "38px"
    arrowPart2.style.left = "-38px"

    isSpecialiserShown = false;
  } else {
    setTimeout(function () { specialiser.style.transition = "0s" }, 1000);

    specialiser.style.bottom = "0px"

    arrowPart1.style.left = "0px"
    arrowPart2.style.left = "0px"
    isSpecialiserShown = true;
  }
}