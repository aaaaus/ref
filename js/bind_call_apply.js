//BIND

const gorilla = {
  name: 'Donkey Kong',
  favoriteFood: 'bananas',
  eat: function() {
    console.log(`${this.name} is eating ${this.favoriteFood}`);
  }
};

gorilla.eat(); // log: "Donkey Kong is eating bananas"

let newGorillaEat = gorilla.eat;

newGorillaEat(); // log: " is eating undefined"

let newGorillaEat = gorilla.eat.bind(gorilla);

newGorillaEat(); // log: "Donkey Kong is eating bananas"

//BIND w/ ARGs

const gorilla = {
  name: 'Donkey Kong',
  favoriteFood: 'bananas',
  eat: function(adverb) {
    console.log(`${this.name} is eating ${this.favoriteFood} ${adverb}`);
  }
};

let newGorillaEat = gorilla.eat.bind(gorilla, 'quickly');

newGorillaEat(); // log: "Donkey Kong is eating bananas quickly"

//CALL AND APPLY

//APPLY for arrays, call for comma separated arguments

const meal = {
  main: 'pot roast',
  side: 'green peas',
  dessert: 'chocolate pudding'
};

function dinnerDescription(day) {
  console.log(
    `${day} dinner is: ${this.main} with a side of ${this.side} and ${this.dessert} for dessert.`
  );
};

dinnerDescription('Friday'); // log: "Friday dinner is: undefined with a side of undefined and undefined for dessert."

dinnerDescription.apply(meal, ['Friday']); // log: Friday dinner is: pot roast with a side of green peas and chocolate pudding for dessert.
dinnerDescription.call(meal, 'Friday'); // log: Friday dinner is: pot roast with a side of green peas and chocolate pudding for dessert.
