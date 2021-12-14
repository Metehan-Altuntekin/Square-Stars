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

const RandomPercentage = () => {return(Math.floor(Math.random() * 100).toString() + "%");}   //Create a random percentage value 

function GetRawNumber(data) {           //Cut off the unit sign from css values
  if (data.includes("px") == true || data.includes("vw") == true || data.includes("vh") == true) {
    return(parseInt(data.slice(0,-2)));
  }
}