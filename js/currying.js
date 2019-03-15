//Closure makes currying possible in JavaScript. It’s ability to retain the state of functions already executed, gives us the ability to create factory🏭 functions — functions that can add a specific value to their argument.

//great article: https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339

function volume(l) {
  return (w) => {
    return (h) => {
      return l * w * h
    }
  }
}

volume(5)(4)(3)
//=> 60

//can be broken down further:

const vol1 = volume(5)
const vol2 = vol1(4)
const result = vol2(3)

vol1
//=>

// (w) => {
//     return (h) => {
//       return l * w * h
//     }
//   }

vol2
//=>

// (h) => {
//       return l * w * h
//     }

result
//=> 60

//practical example:

function discount(rate) {
  return (price) => {
    return price * rate
  }
}

const tenPercentDiscount = discount(0.1)
const twentyFivePercentDiscount = discount(0.25)

tenPercentDiscount(500)
//=> 50

twentyFivePercentDiscount(374)
//=> 93.5
