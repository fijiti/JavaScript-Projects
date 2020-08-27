
// Function to show initializing two variables concatenating the string values to be used by the HTML page.  
function cars( ) {
  var make = "Chevrolet";
  var model = "Camaro";
  var result = "You chose a " + make + " " + model + " ."
  document.getElementById("car").innerHTML = result; 
}

// Function to demonstrate use of += to concatenate two string values.  
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this class!";
    document.getElementById("Concatenate").innerHTML = sentence;
}