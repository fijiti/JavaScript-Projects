window.alert("Hello, World!"); // Here is example of an alert box.  

var X = "Hello, World!";  // Assign two variables string values
var Y = " Hello, Again! ";
document.write(X + Y); // Concatenate variables and print to page.
document.write("<br><br>");
var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);
document.write("<br><br>");

product = 4 * 3; // Here is an expression
document.write(" 4 * 3 =  " + product);
document.write("<br><br>")

function My_First_Function(){  // Define and name function
    var str = "This text is green."; // Define a variable and give it a value.
    var result = str.fontcolor("green"); // Using fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; // Put value of the result into HTML element
}                                                             // with "Green_Text" id