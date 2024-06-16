let input = document.querySelector(".input-value");
let errorValue = document.querySelector(".error");

function buttonValue(keyValue) {
  if (input.value == 0) {
    input.value = keyValue;
  } else {
    input.value = input.value + keyValue;
  }
}

function calculate() {
  try {
    const total = eval(input.value);
    input.value = total;
    console.log(total);
  } catch (error) {
    errorValue.textContent = error;
    console.error(error);
  }
}

function deleteValue() {
  let lastValue = input.value;
  lastValue = lastValue.slice(0, -1);
  console.log(lastValue);
  input.value = lastValue;
}

function reset() {
  input.value = "0";
}
