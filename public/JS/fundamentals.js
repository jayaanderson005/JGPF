/****************
 *  FUNDAMENTALS
 ****************/

function myFunction(p1, p2) {
  return p1 * p2;
}

function initialize() {
  window.alert("Hello World");

  document.getElementById("printHere").innerHTML = "Hello World";

  let x = "20";
  let y = "25";
  document.getElementById("dataTypes").innerHTML = parseInt(x) + parseInt(y);

  // Booleans and Conditionals

  x = 5;
  y = 9;

  //if (x != y )
  //  {
  // document.getElementById("booleans").innerHTML = "It's true " + x + " != "+ y;
  //}

  if (x != y) {
    document.getElementById("booleans").innerHTML = "It's true ";
  }

  my_array = ["item1", "item2", "item3"];
  document.getElementById("array").innerHTML = my_array[1];
  my_array[0];
  document.getElementById("changearray").innerHTML = my_array[0];
  document.getElementById("fullarray").innerHTML = my_array;
  document.getElementById("arraylength").innerHTML = my_array.length;

  let text = "";
  let i;
  for (i = 0; i < 25; i = i + 4) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("loops").innerHTML = text;

  document.getElementById("function").innerHTML = myFunction(4,5);
}

function dateTime() {
  document.getElementById("dateTime").innerHTML = Date();
}
