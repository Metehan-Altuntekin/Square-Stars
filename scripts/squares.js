const size = () => { return (document.getElementById("size-input").value + "px") };  //This is the most efficient way that i could find to read value of an input rapidly
const speed = () => { return ((document.getElementById("speed-input").max) - (document.getElementById("speed-input").value) + 1) };
const density = () => { return (1000 - (document.getElementById("density-input").value * 10)) }
const travelDistance = () => { return (document.getElementById("distance-input").value) };
const duration = () => { return (travelDistance() / 100 * speed()) };

document.getElementById("density-input").addEventListener("input", function () {  //Need to kill the interval and then start again for density change
  console.log(density());
  clearInterval(cycle);
  cycle = setInterval(CreateSquare, density());
});

var distanceInputCounter = 0;   //This variable is created to use for giving unique id for different css animations and their containers (style)
const animationDurations = [];  //This array is created for getting the duration value of previous animations, after new animation. This way, remove function know when to delete the animation
NewAnimationCSS();
document.getElementById("distance-input").addEventListener("input", NewAnimationCSS);  //Need to create new animation css @keyframes for new distance
function NewAnimationCSS() {
  distanceInputCounter++;   //How many times the distance value is changed
  if (distanceInputCounter > 1000) {    //Don't want to increase that value too much
    distanceInputCounter == 0;
  }
  let animationCSS = document.createElement("style");
  animationCSS.id = "AnimationCSS" + distanceInputCounter;
  animationCSS.append(
    '@keyframes Animator' + distanceInputCounter + ' {' +
    '0% {' +
    'opacity: 0;' +
    'transform: translateY(0px) rotate(0deg) scale(0);' +
    '}' +
    '10%{' +
    'opacity: 1;' +
    '}' +
    '50% {' +
    'transform: translateY(-' + travelDistance() / 2 + 'px) rotate(180deg) scale(0.5);' +
    '}' +
    '90%{' +
    'opacity: 1;' +
    '}' +
    '100%{' +
    'opacity: 0;' +
    'transform: translateY(-' + travelDistance() + 'px) rotate(360deg) scale(1);' +

    '}' +
    '}'
  )
  document.head.appendChild(animationCSS);
  var previousDistanceInputCounter = distanceInputCounter - 1     //This variable used for determining which animation box (style) to delete
  setTimeout(() => {
    let a = document.getElementById("AnimationCSS" + previousDistanceInputCounter);
    a.remove();
  }, animationDurations[previousDistanceInputCounter] * 1000);

}

function CreateSquare() {
  const zone = document.getElementById("animation-zone");
  const square = document.createElement("div");

  square.style.backgroundColor = RandomHex(6);
  square.style.top = RandomPercentage();
  square.style.left = RandomPercentage();

  square.style.width = size();
  square.style.height = size();

  square.style.animation = "Animator" + distanceInputCounter + " " + duration() + "s linear infinite";
  zone.appendChild(square);

  animationDurations[distanceInputCounter] = duration();
  setTimeout(() => {
    square.remove();
  }, duration() * 1000)
}

var cycle = setInterval(CreateSquare, density());
