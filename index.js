//When we first load page window location will be empty. This will cause it to hit the if statement and get a code and reload this page
//Once page load we take away the #, split at the & and create an object ({}) with just the access_token =  token
const hash = window.location.hash
                .substring(1)
                .split('&')
                .reduce(function (initial, item) {
                  if (item) {
                    const [ key, value ] = item.split('=')
                    // Same as: 
                    // const keyAndValue = item.split('=');
                    // const key = keyAndValue[0]
                    // const value = keyAndValue[1]
                    initial[key] = decodeURIComponent(value);
                  }
                  return initial;
                }, {});
window.location.hash = '';

// Set token

let  _token = hash.access_token;


const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '55c12b17da23491c82c85edd1c942d61';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=code`;
}
//if you search by artist display all albums he appears in
fetch("https://api.spotify.com/v1/search?q=kanye&type=artist" , {
method: "GET",
headers: {
    'Authorization': "Bearer " + _token     
}
})
.then(response => response.json())
.then((beats) => { 
   
  // everything related to the artist
  //this displays all the artists
  console.log(beats, "this is all the artists!")
    
})
//search by album
//this dsilpays the chosen artist albums
//search albums with artist id
//'https://api.spotify.com/v1/artists/id/albums
//send the album id to the songs fetch
fetch('https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/albums',{
  method: "GET",
  headers: {
      'Authorization': "Bearer " + _token     
  }
})
.then(response => response.json())
.then((beats) => { console.log(beats, "this is all the albusms from selected artist")})

//this gives us all the tracks in an album
fetch('https://api.spotify.com/v1/albums/6pwuKxMUkNg673KETsXPUV/tracks',{
  method: "GET",
  headers: {
      'Authorization': "Bearer " + _token     
  }
})
.then(response => response.json())
.then((beats) => { console.log(beats, "this the selected album")})

//

fetch('https://api.spotify.com/v1/tracks/3aUFrxO1B8EW63QchEl3wX',{
  method: "GET",
  headers: {
      'Authorization': "Bearer " + _token     
  }
})
.then(response => response.json())
.then((beats) => console.log(beats,"this is a single song in the album"))

//song fetch
//'https://api.spotify.com/v1/album/{id}/tracks
//https://api.spotify.com/v1/tracks/id




// http-server dotify .
// live-server -v
// npm install -g live-server
// live-server .