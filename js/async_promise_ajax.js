//ajax example endpoint: https://rallycoding.herokuapp.com/api/music_albums

//es2015 fetch syntax

//fetch will return a promise, so we must chain on a .then statement
function fetchAlbums() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();

//fetch url --> returns a promise of an object representing the request
//.then --> called (with the response) after first promise is resolved, returns another promise
//.then --> called after second promise resolved, with response (json data)

//es2017 syntax
//async precedes the function containing asyncronous actions, await precedes anything returning a promise, set to a variable

async function fetchAlbums() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
}

fetchAlbums();

//as an arrow function:

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
