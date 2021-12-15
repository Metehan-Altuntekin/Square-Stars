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