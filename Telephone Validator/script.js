let userInput = document.getElementById("user-input");
let checkBtn = document.getElementById("check-btn");
let clearBtn = document.getElementById("clear-btn");
let resultsDiv = document.getElementById("results-div");

function validateNumber() {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;

  if (userInput.value === "") {
    return alert("Please provide a phone number");
  }

  if (regex.test(userInput.value)) {
    resultsDiv.innerHTML = "Valid US number: " + userInput.value;
    userInput.value = "";
  } else {
    resultsDiv.innerHTML = "Invalid US number: " + userInput.value;
    userInput.value = "";
  }
}

checkBtn.addEventListener("click", validateNumber);

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
})

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    validateNumber();
  }
})
