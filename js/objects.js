//ES2015 notation

//adding to object using key interpolation syntax

const animalSounds = { cat: 'meow', dog: 'woof' }

let animal = 'lion'
let sound = 'roar'

{ ...animalSounds, [animal]: sound }
//=> {cat: "meow", dog: "woof", lion: "roar"}
