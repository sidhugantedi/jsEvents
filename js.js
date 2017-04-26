var numOne = document.getElementById('num-One');
var numTwo = document.getElementById('num-Two');
var sum = document.getElementById('total');
var button = document.getElementById('green');

// numOne.addEventListener('input', onClick);
// numTwo.addEventListener('input', onClick);

button.addEventListener('click', add)
function add() {
  var one = parseFloat(numOne.value) || 0;
  numOne.value = "";
  var two = parseFloat(numTwo.value) || 0;
  numTwo.value = "";
  sum.innerHTML =  "your sum is : " + (one + two);
  

}