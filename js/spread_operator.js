//essentially lets you drop in values
//imagine stripping off the enclosure (whether it be [] for arrays or {} for objects)

array1 = [1, 2]

//without spread operator, the actual array will be nested:
array2 = [array1, 3, 4]
array2
//=> [[1, 2], 3, 4]

//with spread operator, only the values are dropped in place:
array3 = [...array1, 3, 4]
array3
//=> [1, 2, 3, 4]

//for OBJECTS

//without spread operator we get a nested hash
const racers1 = { first_place: 'Luigi', second_place: 'Yoshi' }
const racers2 = { third_place: 'Mario', racers1 }
racers2
//=> { third_place: 'Mario', { first_place: 'Luigi', second_place: 'Yoshi' } } //gross nested hash

//with spread operator, we get a new object with the contents of the other passed in!
const racers1 = { first_place: 'Luigi', second_place: 'Yoshi' }
const racers2 = { third_place: 'Mario', ...racers1 }
racers2
//=> {third_place: "Mario", first_place: "Luigi", second_place: "Yoshi"}


//other use cases

//MATH.MAX - normal function looks like this:

const integers = [1,2,3]

Math.max(1,2,3)
//=> 3

//using spread operator lets you drop in values for evaluation:
Math.max(...integers)
//=> 3
