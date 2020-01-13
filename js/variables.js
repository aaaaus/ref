//DECLARATION vs ASSIGNMENT

//We declare and assign, and the Javascript engine initializes.

//declaration:

let predator //declaration, initialized as 'undefined'
predator = 'lion' //assignment

let prey = 'gazelle' //declaration and assignment
prey = 'zebra' //reassignment

var weather = 'hot' //declaration and assignment
var weather = 'rainy' //redeclaration and reassignment

//due to hoisting, variables are initialized with 'undefined' values during creation phase
//variables are then assigned appropriate values during execution phase



//VAR

//function scoped
//hoisting: undefined when accessing a variable before it is declared

//LET

//block scoped
//hoisting: ReferenceError when accessing a variable before it is declared
//cannot be redeclared

//CONST

//block scoped
//hoisting: ReferenceError when accessing a variable before it is declared
//cannot be redeclared
//cannot be assigned a new value, but is NOT immutable

//Setting multiple variables at once

var firstName = 'Joe', //'Joe'
    middleName, //undefined
    lastName; //undefined
