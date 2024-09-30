function Value(value) {
  const resultField = document.getElementById("result");

  if (resultField.value === "Error") return;

  const currentValue = resultField.value;

  
  if (currentValue === "0" && (value === "+" || value === "-" || value === "×" || value === "÷")) {
    resultField.value = "0" + value;
  } else if (currentValue === "0" && value !== ".") {
    resultField.value = value;
  } else {
    resultField.value += value;
  }
}

function clearResult() {
  const resultField = document.getElementById("result");

  
  resultField.value = "0";
  resultField.style.color = ""; 
}

function calculateResult() {
  const resultField = document.getElementById("result");

  
  if (resultField.value === "Error") return;

  
  const expression = resultField.value.replace("×", "*").replace("÷", "/").replace("−", "-");

  try {
    
    const result = eval(expression);

    
    if (isFinite(result)) {
      resultField.value = result;
      resultField.style.color = ""; 
    } else {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    displayError(resultField);
  }
}

function deleteLast() {
  const resultField = document.getElementById("result");

  
  if (resultField.value === "Error") return;

  
  resultField.value = resultField.value.slice(0, -1) || "0";
}

function calculatePercentage() {
  const resultField = document.getElementById("result");

  
  if (resultField.value === "Error") return;

  const expression = resultField.value.replace("×", "*").replace("÷", "/").replace("−", "-");

  try {
    
    const result = eval(expression) / 100;

    
    if (isFinite(result)) {
      resultField.value = result;
      resultField.style.color = ""; 
    } else {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    displayError(resultField);
  }
}

function toggleSign() {
  const resultField = document.getElementById("result");

  
  if (resultField.value === "Error") return;

  const currentValue = resultField.value;

  
  if (currentValue.startsWith('-')) {
    resultField.value = currentValue.substring(1);
  } else {
    resultField.value = `-${currentValue}`;
  }
}

function displayError(resultField) {
  resultField.value = "Error";
  resultField.style.color = "red"; 

  
  setTimeout(() => {
    resultField.value = "0";
    resultField.style.color = ""; 
  }, 5000);
}
