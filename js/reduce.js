//CALLBACK SYNTAX

const reducer = (accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
};

//OPTIONAL: index and array are optional parameters which represent the current index and the current array

//REDUCE SYNTAX:
[1, 2, 3].reduce(reducer, initialValue);

//OPTIONAL: initialValue can be used to set an initial value for accumulator; if not used, index 0 is accumulator and first call will be to index 1:

//without initialValue: first call: accumulator = index 0, currentValue = index 1
//with initialValue: first call: accumulator = initialValue, currentValue = index 0

//EXAMPLES

//SUM OF ARRAY

const prices = [4, 2, 12, 6];

prices.reduce((acc, cur) => acc + cur);
//=> 24

//AVERAGE OF AN ARRAY

const grades = [88, 90, 92, 94]; //avg should be 91

const average = (num_array) => {
  return num_array.reduce((total, num, index, array) => {
    if (index === (array.length - 1)) {
      return (total + num) / array.length;
    }
    return total + num;
  }, 0);
};

average(grades);
//=> 91

//SUM OF OBJECT VALUES

const racers = [
  { name: 'Steve', laps: 21 },
  { name: 'Andrea', laps: 25 },
  { name: 'Dwayne', laps: 30 }
];

racers.reduce((acc, cur) => acc + cur.laps, 0); //must provide initialValue for this to work
//=> 76

//COUNTING INSTANCES OF AN OBJECT

const favoriteColors = [
  'red',
  'blue',
  'orange',
  'yellow',
  'orange',
  'blue',
  'green',
  'blue',
  'red',
  'blue',
  'purple',
  'blue'
];

favoriteColors.reduce((allColors, color) => {
  allColors[color] ? (allColors[color] += 1) : (allColors[color] = 1);
  return allColors;
}, {});
//=> {red: 2, blue: 5, orange: 2, yellow: 1, green: 1, …}

//REMOVING DUPLICATE ITEMS IN ARRAY:

duplicateNumbers = [1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 5];

duplicateNumbers.reduce((uniqueNumbers, number) => {
  uniqueNumbers.includes(number) ? null : uniqueNumbers.push(number);
  return uniqueNumbers;
}, []);
//=> [1, 2, 3, 4, 5]
