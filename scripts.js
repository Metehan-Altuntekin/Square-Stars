const size = () => {return(document.getElementById("size-input").value + "px")};  //This is the most efficient way that i could find to read value of an input rapidly
const speed = () => {return((document.getElementById("speed-input").max) - (document.getElementById("speed-input").value) + 1)};
const density = () => {return(1000 - (document.getElementById("density-input").value * 10))}

document.getElementById("density-input").addEventListener("input", function(){  //Need to kill the interval and then start again for density change
  console.log(density());
  clearInterval(cycle);
  cycle = setInterval(CreateSquare, density());
});



const rangeInputs = document.querySelectorAll('input[type="range"');
const numberInputs = document.querySelectorAll('input[type="number"');

rangeInputs.forEach(SyncInputs);
numberInputs.forEach(SyncInputs);
function SyncInputs(item,index,array){
  array[index].addEventListener("input", function(){
    if(array == rangeInputs){
      numberInputs[index].value = item.value
    }
    if (array == numberInputs) {
      rangeInputs[index].value = item.value;
    }
  })
}

document.getElementById("animation-css").innerHTML = 
'@keyframes Animator {' +
  '0% {' + 
    'opacity: 0;' +
    'transform: translateY(0px) rotate(0deg) scale(0);' +
  '}' +
  '10%{' +
    'opacity: 1;' +
  '}' +
  '50% {' +
    'transform: translateY(-150px) rotate(180deg) scale(0.5);' +
  '}' +
  '90%{' +
    'opacity: 1;' +
  '}' +
  '100%{' +
    'opacity: 0;' +
    'transform: translateY(-300px) rotate(360deg) scale(1);' +
    
  '}' +
'}'

function RandomHex(size) {             //Create a random hexadecimal for requested size
  let a = [];
  for (let i = 0; i < size; i++) {
    a.push(Math.floor(Math.random() * 16).toString(16));
  }
  let result = "#";
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return (result);
}
const RandomPercentage = () => {return(Math.floor(Math.random() * 100).toString() + "%");}

function CreateSquare() {
  const zone = document.getElementById("animation-zone");
  const square = document.createElement("div");

  square.style.backgroundColor = RandomHex(6);
  square.style.top = RandomPercentage();
  square.style.left = RandomPercentage();
  
  square.style.width = size();
  square.style.height = size();

  square.style.animation = "Animator " + speed() + "s linear infinite";
  zone.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, speed() * 1000)
}

var cycle = setInterval(CreateSquare, density());