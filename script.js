function add(a, b) {
  console.log("reachdd");
  return (Math.round((Number(a) + Number(b)) * 1000) / 1000).toString();
}

function subtract(a, b) {
  return (Math.round((Number(a) - Number(b)) * 1000) / 1000).toString();
}

function multiply(a, b) {
  return (Math.round(Number(a) * Number(b) * 1000) / 1000).toString();
}

function divide(a, b) {
  return (Math.round((Number(a) / Number(b)) * 1000) / 1000).toString();
}

function operate(a, b, op) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  }
}

const display = document.querySelector(".calc-display");

const buttons = document.querySelectorAll(".btn");

let valueA = "";
let valueB = "";
let operator = "";
let calculated = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const op = btn.dataset.op;
    const result = btn.dataset.result;
    const clear = btn.dataset.clear;


    if (clear) {
      display.innerHTML = "";
      valueA = "";
      valueB = "";
    }

    if (value && valueA) {
      if (calculated) {
        display.innerHTML = "";
        calculated = false;
      }
      display.innerHTML += value;
      valueB += value;
    } else if (value) {
      if (calculated) {
        display.innerHTML = "";
        calculated = false;
      }
      display.innerHTML += value;
    }

    if (op) {
      if (valueA && valueB && operator) {
        display.innerHTML = operate(valueA, valueB, operator);
        valueA = display.innerHTML;
        valueB = "";
      } else if (valueA && operator) {
        operator = op;
        display.innerHTML = "";
      } else {
        operator = op;
        valueA = display.innerHTML;
        display.innerHTML = "";
      }
    }

    if (result) {
      if (valueA && valueB && operator) {
        if (valueB === "0" && operator === "/") {
          console.log("reached");
          display.innerHTML = "DON'T DO IT";
          valueA = "";
          valueB = "";
          calculated = true;
        } else {
          display.innerHTML = "";
          display.innerHTML = operate(valueA, valueB, operator);
          valueA = "";
          valueB = "";
          calculated = true;
        }
      }
    }

    console.log(`A: ${valueA} B: ${valueB} OP: ${operator}`);
  });
});
