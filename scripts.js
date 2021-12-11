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

  console.log(square.style.backgroundColor);
  console.log(square.style.top);
  console.log(square.style.left);
  
  zone.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000)
}

setInterval(CreateSquare, 200);