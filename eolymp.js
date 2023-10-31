const input = Number(prompt("Please enter a number between 10-99"));

if (input<10 || input>99) {
    alert("heas");
    return;
}

const inputStr = input.toString();

const firstDigit = inputStr[0];

const secondDigit = inputStr[1];

alert(firstDigit + " " + secondDigit)