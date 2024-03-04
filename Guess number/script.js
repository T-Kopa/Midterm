const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let userinput = parseInt(prompt("შეიყვანეთ რიცხვი"));
let counter=1 

while (userinput != randomNumber) {
  if (userinput < randomNumber) {
    alert("შეყვანილი რიცხვი ნაკლებია ჩაფიქრებულზე");
  } else {
    alert("შეყვანილი რიცხვი მეტია ჩაფიქრებულზე");
  }
  userinput = parseInt(prompt("შეიყვანეთ რიცხვი"));
  counter +=1
}
alert("გილოცავთ, გამოიცანით "+(counter)+" ცდაში")