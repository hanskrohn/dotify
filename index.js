
//     fetch('http://localhost:3000/songs/1')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(result){
//         console.log(result)
//     })

    

// // fetch("https://api.spotify.com/v1/tracks/" + id, {
//     // method: "GET",
//     // headers: {
//     //     Authorization: "Bearer " + token     
//     // }
//     // })
//     // .then(response => response.json())
//     // .then((beats) => { console.log(beats)
//     // })
//     // fetch('https://accounts.spotify.com/authorize', {
//     //     method: 'GET',
//     //     headers:{
           
//     //     }
//     // })
//     // .then(res => res.json())
//     // .then(s=>console.log(s))

//     // fetch('https://accounts.spotify.com/api/token', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Authorization': 'Basic '
//     //     },
//     //     body: JSON.stringify({
//     //         grant_type: 'refresh_token',
//     //         refresh_token: token
//     //     })
//     // })
//     // Get the hash of the url
// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
    
//   }
  
//   return initial;
// }, {});
// window.location.hash = '';

// // Set token

//   let  _token = hash.access_token;


// const authEndpoint = 'https://accounts.spotify.com/authorize';

// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = clientID;
// const redirectUri = 'http://localhost:3000/callback';
// const scopes = [
//   'user-read-birthdate',
//   'user-read-email',
//   'user-read-private'
// ];

// // If there is no token, redirect to Spotify authorization
// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
// }
// fetch("https://api.spotify.com/v1/artists?"+id , {
// method: "GET",
// headers: {
//     'Authorization': "Bearer " + _token     
// }
// })
// .then(response => response.json())
// .then((beats) => { 
    
//     const everything = beats
//     console.log(beats)
//     fetch(beats.artists[0].href,{
//         method: "GET",
//         headers: {
//             'Authorization': "Bearer " + _token     
//         }
//         })
    
//     .then(res=> res.json())
//     .then(data => console.log(data))
//     fetch('http://localhost:3000',{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({

//         })
//     })
// })
document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault()
    new SearchBox
})
class SearchBox{
    constructor(){
        this.seachBox = document.querySelector('.text-field')
        this.submitBtn = document.querySelector('.submit')
        this.submitBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            window.open("localhost:3000//controller/show?search-input?="+this.seachBox.value+"_self")
        })
    }
}