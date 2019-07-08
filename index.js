
    fetch('http://localhost:3000/songs/1')
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        console.log(result)
    })

    
id = '3n3Ppam7vgaVa1iaRUc9Lp' 
clientID =  '55c12b17da23491c82c85edd1c942d61'
clientSecret = '190d444411b04417816ac4550e9115c4'


token = 'BQA3KJN29pOxnnZTNBl045MacCJHazyaK64qrpbk0rqfOvnYCrSJraTZ-88wWBz-TuQO_GCPvdiBR6db9riP4pMbNErP5WNG-qxqFJuv02uE-6QZKX1sISC8GP6Xhz-rvsI5FfpRRC9UdSvdLR1inU5ZAwFW7vy4YSlbenaHXI_2MadT6cnhX8NRMjSpfp1bvZWsSbARRZ7kuTUNWbWAvS9EeVU98kmU6gXwv0JUMKxVHxsPaJ-r-bf-vwJD0mPGpY6FGaj4jg3A656ObuBTc4OTUncvEMWB3o4'

    // fetch("https://api.spotify.com/v1/tracks/" + id, {
    // method: "GET",
    // headers: {
    //     Authorization: "Bearer " + token     
    // }
    // })
    // .then(response => response.json())
    // .then((beats) => { console.log(beats)
    // })
    // fetch('https://accounts.spotify.com/authorize', {
    //     method: 'GET',
    //     headers:{
           
    //     }
    // })
    // .then(res => res.json())
    // .then(s=>console.log(s))

    // fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Basic ZGU3NTI4YmVlOGMzNGExMGJiZWU1NzU5OWFmMWM2ZGY6YzljYjMyZmM4MTQxNDE4NDhiNjJlMmMzMmM4NTQwMzM'
    //     },
    //     body: JSON.stringify({
    //         grant_type: 'refresh_token',
    //         refresh_token: token
    //     })
    // })
    // Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = clientID;
const redirectUri = '3000';
const scopes = [
  'user-read-birthdate',
  'user-read-email',
  'user-read-private'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
}