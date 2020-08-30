// Switch Statement choosing Car Model
function Car_Function() {
    var Car_Output = "";
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    switch (Cars) {
        case "Camaro":
            Car_Output = "Camaro" + Car_String;
            break;
        case "Firebird":
            Car_Output = "Firebird" + Car_String;
            break;
        case "Pinto":
            Car_Output = "Pinto" + Car_String;
            break;
        case "Mustang":
            Car_Output = "Mustang" + Car_String;
            break;
        case "Corvette":
            Car_Output = "Corvette" + Car_String;
            break;
        case "Vega":
            Car_Output = "Vega" + Car_String;
            break;
        default:
            Car_Output = "Please enter a car model exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car_Output
}

// Using getElementByClassName() function
function Get_Class_Name() {
    var aSentence = document.getElementsByClassName("Click");
    aSentence[0].innerHTML = "The sentence has now changes";
}

// Function using canvas element
function My_Canvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    // Fill rectangle with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
    // Draw Circle
    ctx.beginPath();
    ctx.arc(210, 50, 40, 0, 2*Math.PI);
    ctx.stroke();
    // Add shadow to rectangle
    ctx.shadowBlur = 20;
    ctx.shadowColor = "blue";
    ctx.fillRect(10, 10, 150, 80);
}

