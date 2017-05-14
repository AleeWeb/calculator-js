

var box = document.getElementById("displayScreen");

function addtoScreen(x) { //x is used as a temporary substitute for all the button onclick parameters.
  box.value += x; //box means var box, the display screen. += allows you to have more than one thing on the display

  if(x==="C") {
    box.value=""; //For the CLEAR Button to clear to empty string, display nothing
  }
}
