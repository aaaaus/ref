const myDog = 'Malta';

myDog.toUpperCase();
//=> "MALTA"
myDog.toLowerCase();
//=> "malta"

const extraSpace = '    Hello World!    ';

extraSpace.trim();
//=> "Hello World!"

'Austin'.length;
//=> 6

//Selecting specific character(bracket method or charAt method):

'Austin'[0];
//=> "A"

'Austin'.charAt(0);
//=> "A"

'Austin'.slice(0,1);
//=> "A"

//Selecting specific characters using slice method:
//by default, passing a single argument will slice from the end:

'Austin'.slice(3);
//=> "tin"

//when passing two arguments, first sets start point, second sets ending:

'Austin'.slice(0,3);
//=> "Aus"

///////////////////////////
//STRING METHODS

//StartsWith

'pie'.startsWith('p')
//=> true

'cake'.startsWith('p')
//=> false

//NOTE

'Pie'.startsWith('p')
//=> false

'Pie'.toLowerCase().startsWith('p')
//=> true

///////////////////////////
//ARRAY METHODS

//CONCAT()

const array = [1,2,3]
const array2 = array.slice();
const array3 = ['a','b','c']

array.concat(array2).concat(array3)
//=> [ 1, 2, 3, 1, 2, 3, 'a', 'b', 'c' ]

//SOME()

//returns true/false

//tests whether at least one element in the array passes the test implemented by the provided function (true if so, false if not or empty)

array = [1, 5, 10]

//using callback, will check if any element is greater than 9, which should evaluate to true
array.some(function(element) {
	return element > 9
})
//=> true



////////////////////////////
//NUMBER METHODS

//limits the numbers to the right of the decimal based on number passed in

const num = 3.14159265359

num.toFixed(5);
//=> "3.14159" //this is a STRING

num.toString()
//=> "3.14159265359"


//FIND MAX VALUES
Math.max(1,2,3)
//=> 3

//FOR AN ARRAY
Math.max.apply(null, [1,2,3])
//=> 3

//USING SPREAD OP
const integers = [1,2,3]
Math.max(...integers)
//=> 3


//ABSOLUTE VALUE

Math.abs(-25);
//=> 25

Math.abs(num) //=> Always positive
-Math.abs(num) //=> Always negative
