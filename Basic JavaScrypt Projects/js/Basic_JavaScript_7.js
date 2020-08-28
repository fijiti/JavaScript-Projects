// Global variable
var x = 17;

//Local variable 
function local_Function1() {
    var y = 12;
    var z = y + x;
    document.getElementById("Local_Global").innerHTML = "y + x = " + z;   
}

//Local variable error
function local_Function2() {
    var z = 7;
    console.log(z + y);
    document.getElementById("Local_Local").innerHTML = "Press F12 and check Dev Tools console for error";
}

// Time now if else function versus  time to go to sleep
function is_sleep_time() {
    if (new Date().getHours() < 22) {
        document.getElementById("Time_Now").innerHTML = "It's not time to sleep yet!";
    }
    else {
        document.getElementById("Time_Now").innerHTML = "It's time to sleep!";
    }
}

// Rental if else function.  Checks age for car rental.
function Rental_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Rent = "You are old enough to rent a vehicle!";
    }
    else {
        Rent = "You are not old enough to rent a vehcile!";
    }
    document.getElementById("What_is_your_age?").innerHTML = Rent;
}

// Time of day if else_if else function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon."; 
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



