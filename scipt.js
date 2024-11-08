 const display = document.getElementById("display"); // the line selects an HTML element with the id="display"

 function calculButton(input){  // This function appends a value (input) to whatever is currently displayed in the calculator.
   display.value += input; 
 }
 function equalButton(){ // Equal Button
   try{
    display.value = eval(display.value); // eval() is a built-in JavaScript function, isplay.value contains "3+5*2", eval(display.value) will calculate and return 13.
   }
   catch(error){
    display.value = "error"
   }
 }
 function clearButton(){ //This function clears the calculator’s display
 display.value = ""
 }