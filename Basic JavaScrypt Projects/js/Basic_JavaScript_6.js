// Ride function using Terenary Operator
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"Your are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Old enough to vote function
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

// Vehicle
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Instances of Vehicle 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display instances on HTML page
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Constructor Function and New and This
function Person(first, last, age, hairColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hairColor = hairColor;
}
var John = new Person("John", "Smith", 44, "Red");
var Jim = new Person("Jim", "Smart", 33, "Brown");
var Jan = new Person("Jan", "Johnson", 55, "Blonde");
function displayPerson() {
    document.getElementById("New_and_This").innerHTML = John.firstName + " " + John.lastName + " is " + John.age + " years old and has " + John.hairColor + " colored hair.";
}

// Nested Function
function MultiplyBySeven() {
    document.getElementById("Nested_Function").innerHTML = "Original number in main function is 4 and nested function is called and multiplies that number by 7.  Main returns changed number of "+ Multiply();
    function Multiply() {
        var first_number = 4;
        function Times_seven(){first_number *= 7;}
        Times_seven();
        return first_number;
    }
    
}