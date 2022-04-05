
/*
//1-variant
let result = Number(prompt());
for (let counter = 0; counter < 10; counter++) {
  result *= 2;
  console.log(result);
}

//2-variant
let rest = prompt();
  result *= 1;

  console.log(result);

  if (result *= 2) {
    console.log(result);
  }
  if (result *= 3) {
    console.log(result);
  }
  if (result *= 4) {
    console.log(result);
  }
  if (result *= 5) {
    console.log(result);
  }
  if (result *= 6) {
    console.log(result);
  }
  if (result *= 7) {
    console.log(result);
  }
  if (result *= 8) {
    console.log(result);
  }
  if (result *= 9) {
    console.log(result);
  }
  else if (result *= 10) {
    console.log(result);
  }
*/


//1-variant
let operand1 = Number(prompt("Birinchi raqam kiriting:"));
let operator = prompt("Operatorni kiriting *,+,-,/");
let operand2 = Number(prompt("Ikkinchi raqam kiriting:"));
let home = document.getElementById('home');
// let danger = document.getElementByid('danger');

if (isNaN(operand1) && isNaN(operand2)) {
  home.innerHTML=("Raqam belgisi yomi klaviaturada?");
  console.log("Raqam belgisi yomi klaviaturada?");
}
  else if (operator == "+") {
    home.innerHTML=("Result: " + (operand1 + operand2));
    console.log("Result: " + (operand1 + operand2));
  }
  else if (operator == "-") {
    home.innerHTML=("Result: " + (operand1 - operand2));
    console.log("Result: " + (operand1 - operand2));
  }
  else if (operator == "*") {
    home.innerHTML=("Result: " + (operand1 * operand2));
    console.log("Result: " + (operand1 * operand2));
  }
  else if (operator == "/") {
    home.innerHTML=("Result: " + (operand1 / operand2));
    console.log("Result: " + (operand1 / operand2));
  }
  else {
    home.innerHTML = ("Notogri operator!");
    console.log("Notogri operator!");
  }

/*
  //2-variant
let num1 = Number(prompt());
let num2 = Number(prompt());
// const operator = "+";
let result = Number((num1 + num2));

console.log(result);

if (result *= 2) {
  console.log(result);
}
if (result /= 2) {
  console.log(result);
}
if (result -= 2) {
  console.log(result);
}
*/