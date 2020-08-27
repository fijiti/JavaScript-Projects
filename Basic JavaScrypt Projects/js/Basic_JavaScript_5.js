
// Chose to put document.write first because it opens the page clearing it.  
document.write(`<h1>JavaScript and Boolean Logic</h1>
              <h3>Using typeof operator in JavaScript:</h3>  
              typeof 11 is a ${typeof 11}
              <br>typeof "word" is a ${typeof "word"}
              <br>typeof 1.5 is a ${typeof 1.5}
              <br>typeof true is a ${typeof true}`);

// Using coercion in JavaScript
function coercion_Function(){
    document.getElementById("test16").innerHTML = ("Test Coercion : '10' + 5 = " + ("10" + 5));
}

// Using my_Function to show different boolean tests. 
function boolean_Function() {
    
    document.getElementById("test1").innerHTML = ("Test 44 != 44 : " + (44 != 44));
    document.getElementById("test2").innerHTML = ("Test 55 != 33 : " + (55 != 33));
    document.getElementById("test3").innerHTML = ("Test !false :" + !false);
    document.getElementById("test4").innerHTML = ("Test 5 > 2 : " + (5 > 2));
    document.getElementById("test5").innerHTML = ("Test 12 < 8 : " + (12 < 8));
    document.getElementById("test6").innerHTML = ("Test 45 == 45 : " + (45 == 45));
    document.getElementById("test7").innerHTML = ("Test 345 == 355 : " + (345 == 455));
    document.getElementById("test8").innerHTML = ("Test 55 === 55 : " + (55 === 55));
    document.getElementById("test9").innerHTML = ("Test 55 === '555' : " + (55 === "555"));
    document.getElementById("test10").innerHTML = ("Test 55 === '55' : " + (55 === "55"));
    document.getElementById("test11").innerHTML = ("Test 55 === 5555 : " + (55 === 555));
    document.getElementById("test12").innerHTML = ("Test 44 > 4 || 55 < 44 : " + (44 > 4 || 55 < 44));
    document.getElementById("test13").innerHTML = ("Test 2 > 4 || 77 < 55 : " + (2 > 4 || 77 < 55));
    document.getElementById("test14").innerHTML = ("Test 44 > 4 && 3 < 44 : " + (44 > 4 && 3 < 44));
    document.getElementById("test15").innerHTML = ("Test 44 > 4 && 44 > 55 : " + (44 > 4 && 44 > 55));
    
}



