let PI = 3.14159;
let radius;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("mySideAinput").value;
    let circumfrence = 2 * PI * radius;
    document.getElementById("Circumfrence").innerHTML = "The Circumfrence is:  " + circumfrence;

}