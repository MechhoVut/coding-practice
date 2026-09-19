let a = 20;
let b = 5;

let operator = "*";
let result;

switch (operator) {
    case "+":
        result = a + b;
        break;

    case "-":
        result = a - b;
        break;

    case "*":
        result = a * b;
        break;

    case "/":
        result = a / b;
        break;

    case "%":
        result = a % b;
        break;

    default:
        result = "Invalid operator";
}

console.log(result);