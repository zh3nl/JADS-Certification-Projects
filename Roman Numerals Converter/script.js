const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let answer = "";
  for (let prop in romanNumerals) {
    while (num >= romanNumerals[prop]) {
      answer += prop;
      num -= romanNumerals[prop];
    }
  }
  return answer;
}

const isValid = (str, int) => {
    let errorText = '';
  
    if (!str || str.match(/[e.]/g)) {
      errorText = 'Please enter a valid number.';
    } else if (int < 1) {
      errorText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
      errorText = 'Please enter a number less than or equal to 3999.';
    } else {
      // No errors detected
      return true;
    }
  
    // Handle error text and output styling
    output.innerText = errorText;
    output.classList.add('alert');
  
    return false;
  };
  
  const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
  };
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateScreen();
  });
  
  convertButton.addEventListener('click', () => {
    updateScreen();
  });
  
  const updateScreen = () => {
    const numberStr = document.getElementById('number').value;
    const int = parseInt(numberStr, 10);
  
    output.classList.remove('hidden');
  
    clearOutput();
  
    if (isValid(numberStr, int)) {
      output.innerText = convertToRoman(int);
    }
  };
