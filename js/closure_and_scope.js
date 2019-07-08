let city = 'New York';

function greeting() {
  console.log(`Hello from ${city}!`);
}

city = 'Los Angeles';

greeting();
// log => Hello from Los Angeles!

//as seen above, greeting will reference 'city' at the time of being called, which is then 'Los Angeles'

//GLOBAL SCOPE
//attached to 'window' (in browser)

//LOCAL SCOPE
//inside a function

/////////////////////////////

//GLOBAL SCOPE

//the following has global scope, as it is defined in the top-level scope

var bestFruit = 'banana';

function functionOne() {
  console.log(bestFruit);
}

functionOne(); // log output: "banana"

//in the browser, top global variables are properties of the global window object
//const and let will not behave this way

window.bestFruit = 'apple';
console.log(window.bestFruit); // log output: 'apple'

//it is better practice to namespace your global objects:

var app = {};
app.bestFruit = 'grapes';
function functionTwo() {
  console.log(app.bestFruit);
}
functionTwo(); // log output: 'grapes'

//in Node, top-level is not the same as global, but local to that module.
//global variables must be set with the global namespace object.

//declaring a variable without a keyword (var, let, const) will give it global scope, no matter where it is declared

//LOCAL SCOPE

var bestFruit = 'banana'; //global

function inAsia() {
  var bestFruit = 'mango'; //local scope, overrides the global variable in this scope
  console.log(bestFruit);
}

//BLOCK SCOPE

//used by using keywords CONST and LET
//variable scope is set between {} and any sub-blocks

function inNorthAmerica() {
  const bestFruit = 'apple';
  if (true) {
    let otherFruit = 'orange';
    console.log(bestFruit); //in scope
  }
  console.log(otherFruit); //error: out of scope
}

inNorthAmerica();
console.log(bestFruit); //error: outside of scope
