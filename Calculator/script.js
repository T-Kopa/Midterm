let number1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი"));
let operation;
let valid=false
do {
  operation = prompt("შეიყვანეთ მოქმედება (+, -, *, /)")
  
  if (
    (operation == "+") || 
    (operation == "-") || 
    (operation == "*") || 
    (operation == "/")  )
    {valid = true}
  }
  while (valid==false)
  

let number2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი"));
let result = 0;

if (operation == "+") {
  result = number1 + number2;
  alert(number1 + " + " + number2 + " = " + result);
} else if (operation == "-") {
  result = number1 - number2;
  alert(number1 + " - " + number2 + " = " + result);
} else if (operation == "*") {
  result = number1 * number2;
  alert(number1 + " * " + number2 + " = " + result);
} else if (operation == "/") {
  if (number2 !== 0) {
    result = number1 / number2;
    alert(number1 + " / " + number2 + " = " + result);
  } else {
    alert("Error: Division by zero");
  }
} else {
  alert("Error: Invalid operation");
}
