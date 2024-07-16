const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = (str) => {
  let lowerCaseStr = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let reverse = lowerCaseStr.split("").reverse().join("").toLowerCase();
  if (lowerCaseStr === reverse) {
    return `${str} is a palindrome`;
  }
  return `${str} is not a palindrome`;
};

const updateScreen = (input) => {
  let resultMsg = "";

  if (input === "") {
    alert("Please input a value.");
    return;
  }

  resultDiv.replaceChildren();

  resultMsg = checkPalindrome(input);

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);
  resultDiv.classList.remove("hidden");

  userInput.value = "";
};

checkButton.addEventListener("click", () => {
  updateScreen(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
