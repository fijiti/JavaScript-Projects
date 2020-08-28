// Using slice() method
function mySliceFunction(){
    var aString = "The cow jumped over the moon!";
    var aSection = aString.slice(3, 14);
    document.getElementById("Slice_It").innerHTML = 
        `aString = ${aString}
        <br>aSection = aString.slice(3, 14)
        <br>aSection = ${aSection}`;
}

// Using toUpperCase() method
function myCapitalizeFunction() {
    var aString = "This sentence will convert to upper case using toUpperCase method!";
    var aCapitalizedString = aString.toUpperCase();
    document.getElementById("To_Upper").innerHTML = 
        `aString = ${aString}
        <br>aCapitalizedString = aString.toUpperCase()
        <br>aCapitalizedString = ${aCapitalizedString}`;
    
}

// Using Search() method 
function search_method() {
    var aString = "The cats and the cradle and the silver spoon.";
    var result = aString.search("cats");
    document.getElementById("Search_Result").innerHTML = 
        `aString = ${aString}
        <br>result = aString.search("cats")
        result = ${result}`
}

// Using toString() method
function string_method() {
    var x = 77;
    result = x.toString();
    document.getElementById("To_String").innerHTML = 
        `x = ${x}
        <br>typof(x) = ${typeof(x)} 
        <br>result = x.toString()
        <br>result = ${result}
        <br>typeof(result) = ${typeof(result)}`;
}

// Using toPrecision() method
function precision_method() {
    var x = 1222.98989873;
    var result = x.toPrecision(7);
    document.getElementById("To_Precision").innerHTML = 
        `Before x.toPrecision(7): x = ${x}
        <br>typof(x) = ${typeof(x)}
        <br>result = x.toPrecision(7) = ${result}
        <br >typeof(result) = ${typeof(result)}`;
}

// Using toFixed() method
function to_fixed_method() {
    var x = 77.3377;
    var result = x.toFixed(2);
    document.getElementById("To_Fixed").innerHTML = 
        `x = ${x}
        <br>result = x.toFixed(2)
        <br>result = ${result}
        <br>typeof(result) = ${typeof(result)}`;
}

// Using valueOf() method
function value_of_method() {
    var aString = "Hi There!";
    var result = aString.valueOf();
    document.getElementById("Value_Of").innerHTML = 
        `aString = ${aString}
        <br>result = aString.valueOf() = ${result}
        <br>typeof(result) = ${typeof(result)}`;
}

// Using concat() method
function concat_method() {
    var string1 = "The cow jumped ";
    var string2 = "over the ";
    var string3 = "moon!";
    var sentence = string1.concat(string2, string3);
    document.getElementById("Concatenate").innerHTML =
        `string1 = ${string1}
        <br>string2 = ${string2}
        <br>string3 = ${string3}
        <br>sentence = string1.concat(string2, string3)
        <br>sentence = ${sentence}`;
}