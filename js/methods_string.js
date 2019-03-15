//toUpperCase() and toLowerCase() work as implied; non-destructive

const myDog = 'Malta';

myDog.toUpperCase();
//=> "MALTA"
myDog.toLowerCase();
//=> "malta"

//trim() removes extra space at the beginning and end of a string:

const extraSpace = '    Hello World!    ';

extraSpace.trim();
//=> "Hello World!"

'Austin'.length;
//=> 6

//SELECTING A SPECIFIC CHARACTER OR RANGE OF CHARACTERS:

//bracket method:

'Austin'[0];
//=> "A"

//charAt() method:

'Austin'.charAt(0);
//=> "A"

//slice() method:

'Austin'.slice(0,1);
//=> "A"

//Selecting a range of characters using slice method:
//by default, passing a single argument will slice from the end:

'Austin'.slice(3);
//=> "tin"

//when passing two arguments, first sets start point, second sets ending:

'Austin'.slice(0,3);
//=> "Aus"

//.startsWith returns boolean for starting value, CASE-SENSITIVE

'pie'.startsWith('p')
//=> true

'cake'.startsWith('p')
//=> false

//NOTE case-sensitive example:

'Pie'.startsWith('p')
//=> false

'Pie'.toLowerCase().startsWith('p')
//=> true

//parseInt

//can be used on ordinal numbers:

parseInt("10th");
//=> 10

//repeat a STRING
"#".repeat(5)
//=> "#####"

//The OLD way
Array(6).join("#") // create string with 5 #'s: "#####"
