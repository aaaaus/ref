let city = 'New York'

function greeting() {
  console.log(`Hello from ${city}!`);
}

city = 'Los Angeles'

greeting()
// log => Hello from Los Angeles!

//as seen above, greeting will reference 'city' at the time of being called, which is then 'Los Angeles'
