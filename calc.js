
var box = document.getElementById("displayScreen");

function addtoScreen(x) { //x is used as a temporary substitute for all the button onclick parameters.
  box.value += x; //box means var box, the display screen. += allows you to have more than one thing on the display

  if(x==="C") {
    box.value=""; //For the CLEAR Button to clear to empty string, display nothing
  }
}

//For the = sign button, the onclick function name is answer.
function answer() {
  x = box.value;
  x = eval(x);  //Evaluate String. Simply means do the math for each button string parameter.
  box.value = x;
}

//For the exponent button x^2
function power(){
  x = box.value;
  x = eval(x*x);
  box.value = x;
}

//For the CE button
function backspace() {
  var num = box.value;  //Stored the entire string in a new varible.
  var len = num.length - 1; // Length propery of that strength - 1. No matter the length, one less character
  var newNum = num.substring(0, len);
  box.value = newNum;
}
