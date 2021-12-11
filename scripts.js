const size = () => {return(document.getElementById("size-input").value + "px")};  //This is the most efficient way that i could find to read value of an input

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
    'transform: translateY(-150px) rotate(180deg) scale(1);' +
  '}' +
  '90%{' +
    'opacity: 1;' +
  '}' +
  '100%{' +
    'opacity: 0;' +
    'transform: translateY(-300px) rotate(360deg) scale(0);' +
    
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

function RandomPercentage() {
  let a = Math.floor(Math.random() * 100).toString();
  return (a + "%")
}

function CreateSquare() {
  const zone = document.getElementById("animation-zone");
  const square = document.createElement("div");

  square.style.backgroundColor = RandomHex(3);
  square.style.top = RandomPercentage();
  square.style.left = RandomPercentage();
  
  square.style.width = size();
  square.style.height = size();
  zone.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000)
}

setInterval(CreateSquare, 10);