
var num1 = window.prompt("Enter your first number: ");
var num2 = window.prompt("Enter your second number: ");
var op = window.prompt("Enter your operator: ")

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (op =="+") {
    document.write(num1 + num2);
        }
        else if (op =="-") {
            document.write(num1 - num2);
        }
        else if (op =="/") {
            document.write(num1 / num2);
        }
        else if (op =="*") {
            document.write(num1 * num2);
        }
        else {
            document.write("Invalid Operator");
}
        