class Square {        //Object class for squares
  constructor() {
    this.style = {
      width: "5px",
      height: "5px",
      display: "inline-block",
      position: "absolute",
      left: RandomPercentage(),
      top: RandomPercentage(),
      backgroundColor: "#" + RandomHex(3)

    }

  }
}

function RandomHex(size) {             //Create a random hexadecimal for requested size
  let a = [];
  for (let i = 0; i < size; i++) {
    a.push(Math.floor(Math.random() * 16).toString(16));
  }
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return (result);
}

function RandomPercentage() {
  let a = Math.floor(Math.random() * 100).toString();
  return (a + "%")
}

const squares = [];
for (let i = 0; i < 30; i++) {
  let a = new Square();
  squares.push(a)
}

for (let i = 0; i < squares.length; i++) {
  let a = "";
  a += '<div class="squares" id="square' + i + '"></div>'
  for (let x in squares[i].style){
    document.getElementById("square" + i).style
  }
}
