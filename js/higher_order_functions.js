//In JAVASCRIPT, FUNCTIONS are VALUES that can be passed around... this can be exploited to create HIGHER ORDER FUNCTIONS

const pets = [
{ name:'rocky',     species:'fish' },
{ name:'sprinkles', species:'cat' },
{ name:'spunky',    species:'dog' },
{ name:'porkchop',  species:'dog' },
{ name:'smelly',    species:'cat' },
{ name:'flappy',    species:'bird' }
]

//old school filter

const dogs = []
for (let i = 0; i < pets.length; i++) {
  if(pets[i].species === 'dog') {
    dogs.push(pets[i])
  }
}

dogs
//=> (2) [{ name:'spunky', species:'dog' }, { name:'porkchop', species:'dog' }]


//filter uses an anonymous callback function, therefore filter is a higher order function
const doggies = pets.filter(function(animal) {
	return animal.species === 'dog'
})

doggies
//=> (2) [{ name:'spunky', species:'dog' }, { name:'porkchop', species:'dog' }]


//To take this one step further, the anonymous function can be saved to a variable and used in other ways:

const isDog = function(animal) {
  return animal.species === 'dog'
}
//returns true or false

const doggies = pets.filter(isDog)

doggies
//=> (2) [{ name:'spunky', species:'dog' }, { name:'porkchop', species:'dog' }]

const allDogTest = pets.every(isDog)
//expected output: false
