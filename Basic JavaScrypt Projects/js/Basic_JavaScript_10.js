// Loop Function
function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 8) {
        Digit += x + " Loop!<br>";
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Using .length property
function length_property() {
    var aString = "The cow jumped over the moon!";
    document.getElementById("Length").innerHTML =
        `aString = ${aString}
        <br>The length of aString (aString.length) = ${aString.length}`
}

// For loop method
function for_loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML =
        `Here is looping through the array of Instruments:
        <br>${Content}`;
}

// Array Function
function array_Function() {
    var cars = [];
    cars[0] = "Firebird";
    cars[1] = "Camaro";
    cars[2] = "Mustang";
    cars[3] = "Corvette";
    document.getElementById("Array").innerHTML =
        `The second car in the array (cars[1]) is a ${cars[1]}.`;
}

// Using constant
function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML =
        `The cost of the ${Musical_Instrument.type} was added and is ${Musical_Instrument.price}.
        <br>The color was black and is now ${Musical_Instrument.color}`;
}

// let function 
function let_function() {
    var x = 6;
    var y = 6;
    {
        var x = 7;
        let y = 7;
    }
    document.getElementById("Let").innerHTML =
        `var x = 6; {var x = 7; } now x = ${x}
        <br>var y = 6; {let x = 7; } now y = ${y}`;
}

// Using JavaScript return statement
function return_function() {

    function add_Numbers() {
        var number1 = 7;
        var number2 = 12;
        return number1 + number2;
    }
    document.getElementById("Result").innerHTML = 
        `7 + 12 returns ${add_Numbers()}`;
}

// Object example created using let 
function object_function() {
    let car = {
        make: "Chevrolet ",
        model: "Camaro ",
        year: "2020 ",
        color: "Blue ",
        description: function() {
            return "This object is a " + this.color + this.year + this.make + this.model;
        }       
    };
    document.getElementById("Car").innerHTML = car.description();
}

// Use break; statement
function break_function () {
    var number = "";
    for (let index = 1; index < 11; index++) {
        if (index === 7) {
            break;
        }
        number += "The number is " + index + "<br>";
        
    }
    document.getElementById("Break_Call").innerHTML = number;
}

// Using continue statement
function continue_function() {
    var number = "";
    for (let index = 1; index < 11; index++) {
        if (index === 7) {
            continue;
        }
        number += "The number is " + index + "<br>";
        
    }
    document.getElementById("Continue").innerHTML = number;
}
