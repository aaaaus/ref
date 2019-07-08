const spaceship = {
  name: 'Millenium Falcon',
  color: 'gray',
  passengers: ['Han', 'Chewbacca', 'Lando'],
  whatIsThis() {
    console.log(this);
  },
  hyperdrive() {
    console.log(`${this.name} is jumping to lightspeed`);
  },
  manifest() {
    this.passengers.forEach(function(passenger) {
      console.log(`${passenger} is on board the ${this.name}`);
    });
  },
  manifestArrow() {
    this.passengers.forEach(passenger =>
      console.log(`${passenger} is on board the ${this.name}`)
    );
  }
};

spaceship.whatIsThis();
//=> {name: "Millenium Falcon", color: "gray", whatIsThis: ƒ, hyperdrive: ƒ}

//within an object literal, a function's 'this' will be the object literal itself

spaceship.hyperdrive();
//log => Millenium Falcon is jumping to lightspeed

spaceship.manifest();
//log => Han is on board the
//log => Chewbacca is on board the
//log => Lando is on board the

//here, this within the callback is being executed in the window, so this refers to the window

spaceship.manifestArrow();
//log => Han is on board the Millenium Falcon
//log => Chewbacca is on board the Millenium Falcon
//log => Lando is on board the Millenium Falcon

//using an arrow function means that this will reference the parent scope
