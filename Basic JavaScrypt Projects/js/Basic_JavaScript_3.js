// Function to show addition in Java Script
function add_Function() {
    var sum = 5 + 3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + sum;
}

// Subtraction Function 
function subtract_Function () {
    var sum = 9 - 2;
    document.getElementById("Minus").innerHTML = "9 - 2 = " + sum;
}

// Multiply 
function multiply_Function() {
    var sum = 3 * 9;
    document.getElementById("Multiply").innerHTML = "3 * 9 = " + sum;
}

// Division 
function divide_Function() {
    var sum = 21 / 7;
    document.getElementById("Divide").innerHTML = "21 / 3 = " + sum;
}

// Multiple math operations
function multi_math_Function() {
    var sum = (2 * 6) / (1 + 2) - 3;
    document.getElementById("Multiple_Math").innerHTML = "(2 * 6) / (1 + 2) - 3 = " + sum;
}

// Modulus
function modulus_Function() {
    var result = 27 % 7;
    document.getElementById("Modulus").innerHTML = "27 % 7 = " + result;
}

// Negation operator
function negation_Function() {
    var x = 7;
    document.getElementById("Negate").innerHTML = "7 = " + -x;
}

// Increment operator
function increment_Function(){
    var x = 26;
    x++;
    document.getElementById("Increment").innerHTML = "x = 26 and x++ = " + x;
}

// Decrement operator 
function decrement_Function() {
    var x = 28;
    x--;
    document.getElementById("Decrement").innerHTML = "x = 28 and x-- = " + x;
}

// Math random method
function random_math_alert() {
    window.alert(Math.random() * 100);

}
