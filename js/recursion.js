//when a function calls itself... until it doesn't

//countdown example
let countdown = (num) => {
  if (num === 0) return;
  console.log(num)
  countdown(num - 1)
}

countdown(10)

//practical example - organize the following relationships into a tree:

let categories = [
  { name: 'alan', parent: null },
  { name: 'brett', parent: 'alan' },
  { name: 'charlie', parent: 'brett' },
  { name: 'claire', parent: 'bridget' },
  { name: 'bridget', parent: 'alan' },
  { name: 'chris', parent: 'brett' },
  { name: 'connie', parent: 'bridget' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.name] = makeTree(categories, c.name))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2
  )
);

//result:

// {
//   "alan": {
//     "brett": {
//       "charlie": {},
//       "chris": {}
//     },
//     "bridget": {
//       "claire": {},
//       "connie": {}
//     }
//   }
// }
