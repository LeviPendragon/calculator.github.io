let num1;
let num2;
let operator;

let visor = document.querySelector(".visor");

for (let i = 0; i < 17; i++) {
  let teste = document.querySelectorAll("button")[i];
  teste.addEventListener("click", function () {
    switch (teste.innerText) {
      case "1":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "2":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "3":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "4":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "5":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "6":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "7":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "8":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "9":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "0":
        if (visor.innerText === "0") {
          visor.innerHTML = teste.innerText;
        } else {
          visor.innerHTML += teste.innerText;
        }
        break;
      case "/":
        num1 = Number(visor.innerHTML);
        operator = "/";
        visor.innerHTML = "0";
        break;
      case "x":
        num1 = Number(visor.innerHTML);
        operator = "x";
        visor.innerHTML = "0";
        break;
      case "-":
        num1 = Number(visor.innerHTML);
        operator = "-";
        visor.innerHTML = "0";
        break;
      case "+":
        num1 = Number(visor.innerHTML);
        operator = "+";
        visor.innerHTML = "0";
        break;
      case "=":
        num2 = Number(visor.innerHTML);
        if (operator === "+") {
          visor.innerHTML = add(num1, num2);
        } else if (operator === "-") {
          visor.innerHTML = sub(num1, num2);
        } else if (operator === "x") {
          visor.innerHTML = multiply(num1, num2);
        } else if (operator === "/") {
          visor.innerHTML = divide(num1, num2);
        }
        break;
      case "<-":
          if(visor.innerHTML.length === 1){
              visor.innerHTML = "0";
          }else{
              visor.innerHTML = visor.innerHTML.slice(0, -1);;
          }
        break;
      case "C":
        visor.innerHTML = "0";
        num1 = 0;
        num2 = 0;
        break;
      default:
        break;
    }
  });
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
