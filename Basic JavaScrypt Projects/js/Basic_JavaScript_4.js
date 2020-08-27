// Practice creating a dictionary function
function my_Dictionary() {
    var Cars = {
        Make: "Chevrolet",
        Model: "Camaro",
        Wheels: 4,
        Doors: 2,
        Color: "Blue",
        Year: 2020,
        Sound: "Vroom!"    
    }
    delete Cars.Sound;
    document.getElementById("Dictionary").innerHTML = Cars.Year  + " " + Cars.Make + " " + Cars.Model + "\n Deleted Sound: " + Cars.Sound;
}


