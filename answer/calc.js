//simple calculator solution
//allows simple addition and subtraction

var solution_bar = document.createElement("p");
solution_bar.id = "solution_bar";

var memory;
var lastOperator;
var lastPushed;

function btnPushed(e) {
  
  if (!isNaN(e.target.innerText)) {

    if (lastPushed === 'numeric') {
      solution_bar.innerText += e.target.innerText;
    } else {
      if (solution_bar.innerText !== "") {
        memory = parseInt(solution_bar.innerText);
      }
      solution_bar.innerText = e.target.innerText;
    }
    lastPushed = 'numeric';
  } else {
    if (e.target.innerText === '=') {
      if (lastOperator === '+') {
        solution_bar.innerText = memory + parseInt(solution_bar.innerText);
      } else {
        solution_bar.innerText = memory - parseInt(solution_bar.innerText);
      }
    } else {
      lastOperator = e.target.innerText;
    }
    lastPushed = 'operator';
  } 
}
var outer= document.createElement("div");
document.body.appendChild(outer);

var header = document.createElement("h2");
header.innerText = "Calculate All the Things!";
outer.appendChild(header);

var calculator = document.createElement("div");
calculator.id = "calculator";
outer.appendChild(calculator);

var num = 1;

for (i=1; i<=12; i++) {

var button = document.createElement("div");
    if (i == 4) {
      button.innerText = "+";
    } else if (i == 8) {
      button.innerText = "-";
    } else if (i == 12) {
      button.innerText = "="; 
    } else {
      button.innerText = num;
      num++;
    }
    button.addEventListener('click', btnPushed);
    calculator.appendChild(button);
}

outer.appendChild(solution_bar);


