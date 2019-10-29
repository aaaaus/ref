//accessing objects

const capitalCities = { 'new york': 'Albany', maryland: 'Annapolis', ohio: 'Columbus' }

//dot notation is used to access already known properties:

capitalCities.ohio
//=> "Columbus"

//'new york' would not work as dot notation, it must be referenced using bracket notation:

capitalCities['new york']
//=> "Albany"

//dot notation cannot be used with variables - we must also use bracket notation here:

const state = 'maryland'

capitalCities[state]
//=> "Annapolis"

//****************
//ARRAY CONVERSION
//****************

const animals = { snake: '🐍', whale: '🐋' };

Object.keys(animals);
//["snake", "whale"]

Object.values(animals);
//["🐍", "🐋"]

Object.entries(animals);
//[ ["snake", "🐍"], ["whale", "🐋"] ]

//ES2015 notation

//adding to object using key interpolation syntax

const animalSounds = { cat: 'meow', dog: 'woof' }

let animal = 'lion'
let sound = 'roar'

{ ...animalSounds, [animal]: sound }
//=> {cat: "meow", dog: "woof", lion: "roar"}
