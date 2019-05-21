//reverse name without using any built in reverse functions

function reverseName(name) {
  splitName = name.split('');

  let i = 0;
  const reverseArray = [];

  while (i < splitName.length) {
    const letter = splitName.pop();
    reverseArray.push(letter);
  }

  return reverseArray.join('');
}
