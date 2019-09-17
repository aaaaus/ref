////////////
//PROPERTIES
////////////

//length
[1, 2, 3, 4].length
//=> 4

/////////
//METHODS
/////////

//CONCAT
//creates a new concatenated array
//does not alter original arrays, creates new array

turtles1 = ['Leo', 'Raph']
turtles2 = ['Mike', 'Don']
turtles1.concat(turtles2)
//=> ["Leo", "Raph", "Mike", "Don"]

//alternative using spread operator:
[...turtles1, ...turtles2]
//=> ["Leo", "Raph", "Mike", "Don"]

//chaining concat
const array1 = [1,2,3]
const array2 = array1.slice(); //copy of array1
const array3 = ['a','b','c']

array.concat(array2).concat(array3)
//=> [ 1, 2, 3, 1, 2, 3, 'a', 'b', 'c' ]

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//ITERATION METHODS

//GOOD RESOURCE: MDN web docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//------------------------------------------------------------------------------
//forEach

//calls a function once for each element
//return value is ALWAYS undefined, is not chainable

const bag = []
const cart = ['bananas', 'milk', 'potatoes']
cart.forEach(product => bag.push(product))
//=>undefined
bag
//=> ["bananas", "milk", "potatoes"]


const animals = ['monkey', 'tiger', 'snake']
//optional second argument passed will be for index
animals.forEach((animal, index) => {
    console.log(`${animal} is at position ${index}`);
})
//=>undefined
//=> LOG: monkey is at position 0
//=> LOG: tiger is at position 1
//=> LOG: snake is at position 2

//------------------------------------------------------------------------------
//map

//always RETURNS AN ARRAY the same length as original
//creates a new array by calling a function for every array element
//calls the provided function once for each element in an array, in order
//does not execute the function for array elements without values
//does not change the original array

array = [5, 6, 7]
array.map(num => num + 1)
// => [ 6, 7, 8 ]

const turtles = [
  {name: 'Leo', color: 'blue'},
  {name: 'Raph', color:'red'},
  {name: 'Mike', color: 'orange'},
  {name: 'Don', color: 'purple'}
]
turtles.map(turtle => turtle.color)
//=> ["blue", "red", "orange", "purple"]

//optional second argument passed will be for index
array.map((num, index) => {
  return [index, num]
})
//=> [ [ 0, 5 ], [ 1, 6 ], [ 2, 7 ] ]

//------------------------------------------------------------------------------
//reduce

//The reduce() method executes a callback reducer function (that you provide) on each member of the array resulting in a single output value; second parameter is optional initial value.

//The reducer function can be given up to four parameters: Accumulator (acc), Current Value (cur), Current Index (idx), Source Array (src)

//Return is accumulator, where value is remembered across iterations and becomes final value

//sum all values of an array:
const array = [1, 2, 3, 4]
array.reduce((acc, cur) => acc + cur)
//=> 10
array.reduce(((acc, cur) => acc + cur), 5) //optional second param for init val
//=> 15

//calcuate total owed from an array of objects:
const debts = [
  {name:'juan', relationship:'friend', amount:30},
  {name:'sam', relationship:'coworker', amount:65},
  {name:'clara', relationship:'friend', amount:150},
  {name:'saajid', relationship:'coworker', amount:20},
  {name:'jeff', relationship:'friend', amount:45}
]

debts.reduce((total, person) => {
  if (person.relationship === 'friend') {
    total += person.amount
  }
  return total
}, 0)
//=> 225

//counting instances of elements by creating object
const names = ['Jo', 'Steve', 'Kim', 'Jo', 'Alex', 'Jo', 'Kim']
const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames
}, {})

countedNames
//=> {Jo: 3, Steve: 1, Kim: 2, Alex: 1}


//------------------------------------------------------------------------------
//filter

//creates new array with elements that pass the test

const friends = ['Austin', 'Brian', 'Vanessa', 'Chris', 'alan']

friends.filter(name => name.length > 5)
//=> ["Austin", "Vanessa"]

friends.filter(name => name.startsWith('A'))
//=> ["Austin"]

friends.filter(name => name.toLowerCase().startsWith('a'))
//=> ["Austin", "alan"]

//remove a single element from an array using filter:
friends.filter(name => name !== 'Austin')
//=> ["Brian", "Vanessa", "Chris", "alan"]

//------------------------------------------------------------------------------
//some

//returns BOOLEAN //tests whether at least one element in the array passes the test implemented by the provided function (true if so, false if not or empty)

array = [1, 5, 10]

//using callback, will check if any element is greater than 9, which here should evaluate to true
array.some(function(element) {
	return element > 9
})
//=> true

//arrow notation:
array.some( element => element > 9 )
//=> true


//ADDING TO ARRAY //push() and unshift() (both DESTRUCTIVE) - both return new array length

days = ['Tue', 'Wed', 'Thu']

days.push('Fri')
//=> 4

days
//=> ["Tue", "Wed", "Thu", "Fri"]

days.unshift('Mon')
//=> 5

days
//=> ["Mon", "Tue", "Wed", "Thu", "Fri"]

//ADDING TO ARRAY (NON-DESTRUCTIVE)
const vowels = ['a','e','i','o','u']

[...vowels, 'y'] //=> ["a", "e", "i", "o", "u", "y"]


//REMOVE FROM ARRAY (NON-DESTRUCTIVE)
//SLICE()

//.slice will return a NEW array; passing in no arguments returns a COPY of the original array

const turtles = ['Leo', 'Raph', 'Mike', 'Don']

//one argument: new array w/ selected element and everything after

turtles.slice(0) //=> ["Leo", "Raph", "Mike", "Don"]
turtles.slice(1) //=> ["Raph", "Mike", "Don"]
turtles.slice(2) //=> ["Mike", "Don"]
turtles.slice(3) //=> ["Don"]
turtles.slice(4) //=> []

turtles.slice(-1) //=> ["Don"]
turtles.slice(-2) //=> ["Mike", "Don"]
turtles.slice(-3) //=> ["Raph", "Mike", "Don"]
turtles.slice(-4) //=> ["Leo", "Raph", "Mike", "Don"]

//two arguments: new array; first argument where new array begins, second argument where exclusion begins

turtles.slice(0,2) //=> ["Leo", "Raph"]
turtles.slice(2,4) //=> ["Mike", "Don"]

//REARRANGING ELEMENTS OF AN ARRAY

//REPLACING ELEMENTS IN AN ARRAY AT A SPECIFIC INDEX:

function replaceIndex(array, index, newValue) {
	return [ ...array.slice(0, index), newValue, ...array.slice(index+1, array.length) ]
}

//reverse
[1, 2, 3].reverse()
//=> [3, 2, 1]

//sort

myArray.sort(function(a,b){
  return (a.split("-")[0] - b.split("-")[0]);
});

units2 = ['1A','12A','2B','11B']
//=> (4) ["1A", "12A", "2B", "11B"]

'12A'.slice(0,-1)
//=> "12"

units2.sort(function(a,b){
  return (a.slice(0,-1) - b.slice(0,-1));
});
//=> (4) ["1A", "2B", "11B", "12A"]

unitArray3.sort(function (unit1, unit2) {

	// Sort by units
	// If the first item has a higher number, move it down
	// If the first item has a lower number, move it up
	if (unit1.number.slice(0,-1) > unit2.number.slice(0,-1)) return 1;
	if (unit1.number.slice(0,-1) < unit2.number.slice(0,-1)) return -1;

	// If the units number is the same between both items, sort alphabetically
	// If the first item comes first in the alphabet, move it up
	// Otherwise move it down
	if (unit1.number.slice(-1) > unit2.number.slice(-1)) return 1;
	if (unit1.number.slice(-1) < unit2.number.slice(-1)) return -1;

});
