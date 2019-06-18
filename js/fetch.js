const newUser = {
  firstName: 'Adam',
  age: 70
};

const existingUser = {
  id: 'pAQduZW',
  firstName: 'Adam',
  age: 70
};

const deleteThisUser = {
  id: 'cGiZXJ4'
};

//GET (default behavior)
fetch(`http://localhost:3000/users`) //async, will return promise
  .then(res => res.json()) //returns converted JSON from promise
  .then(json => console.log(json));

//POST
fetch(`http://localhost:3000/users`, {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

//PATCH
fetch(`http://localhost:3000/users/${existingUser.id}`, {
  method: 'PATCH',
  body: JSON.stringify(existingUser),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

//DELETE
fetch(`http://localhost:3000/users/${deleteThisUser.id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
