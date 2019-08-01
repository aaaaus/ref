//IIFE FUNCTIONS (Immediately Invoked Function Expression)

//are immediately invoked when defined
//good way of protecting scope of your function and variables within it

// Normal function
function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 }

addTogether();

// IIFE

(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 })();

//neat
