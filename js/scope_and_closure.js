//SCOPE

//refers to the visibility of variables, or how a computer keeps track of all variables in a program

//JavaScript uses LEXICAL SCOPING, which allows the nesting of scopes

//CLOSURE

//the combination of a function bundled (enclosed) with its surrounding state (lexical environment)

//GLOBAL SCOPE

//top level; attached to 'window' (if in browser)

//LOCAL SCOPE

//inside a function or block

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

//block scoping example 2

//NOTE: var cannot be locally scoped to blocks; only functions
//if block is within a function, var will have that function's scope

{
  const year = 2300;
  var era = 'future';
}

console.log(year); //Uncaught ReferenceError: year is not defined
console.log(era); // log => future

//////////////////

let city = 'New York';

function greeting() {
  console.log(`Hello from ${city}!`);
}

city = 'Los Angeles';

greeting();
// log => Hello from Los Angeles!

//as seen above, greeting will reference 'city' at the time of being called, which is then 'Los Angeles'
