class Robot {
  constructor(name, ability) {
    this.name = name;
    this.ability = ability;
    this.batteryLevel = 0;
  }

  chargeBattery() {
    if (this.batteryLevel >= 80) {
      this.batteryLevel = 100;
      console.log(`I AM FULLY CHARGED!`);
    } else {
      this.batteryLevel += 20;
      console.log(`My battery is charging! Currently ${this.batteryLevel}%`);
    }
  }

  identifySelf() {
    console.log(`I am ${this.name} and I can ${this.ability}.`);
  }
}

class Droid extends Robot {
  constructor(name, ability, planet) {
    super(name, ability);
    this.planet = planet;
  }

  homePlanet() {
    console.log(`I am from ${this.planet}.`);
  }
}

const robo1 = new Robot('Roomba', 'clean your floors');
const droid1 = new Droid('C-3PO', 'translate and complain', 'Tatooine');

robo1.chargeBattery();
robo1.identifySelf();

droid1.identifySelf();
droid1.homePlanet();
