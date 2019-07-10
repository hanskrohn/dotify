
//     fetch('http://localhost:3000/songs/1')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(result){
//         console.log(result)
//     })

    

// fetch("https://api.spotify.com/v1/tracks/" + id, {
//     method: "GET",
//     headers: {
//         Authorization: "Bearer " + token     
//     }
//     })
//     .then(response => response.json())
//     .then((beats) => { console.log(beats)
//     })
//     fetch('https://accounts.spotify.com/authorize', {
//         method: 'GET',
//         headers:{
           
//         }
//     })
//     .then(res => res.json())
//     .then(s=>console.log(s))

//     fetch('https://accounts.spotify.com/api/token', {
//         method: 'POST',
//         headers: {
//             'Authorization': 'Basic '
//         },
//         body: JSON.stringify({
//             grant_type: 'refresh_token',
//             refresh_token: token
//         })
//     })
//     // Get the hash of the url
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
  if(!window.location.href.includes('code')) window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=code`;
}
clientSecret = '190d444411b04417816ac4550e9115c4'
id = ''

// _token = 'BQBx-FnjwpBSL2YZZ8FuI06IXTSFEXvwtgH_JXXVgDpFHy7gjAMxbr1ZEnXZacYRwnyggKLE1h0ckDBD8h6AWyXhgoJCgiNlPZQDvO1838W56n5VHXomg3E65R6TOHbOa2kBJQdh3UVLXYKa9Cm8wt0IgmH_M2RtDlDrObB8yoBOwx5rcKA5C--UeIsTTF4sN0wMx0PMXK_h6wOzHH2F_8yyJTFOkIO3IoNLqKfN5jwzg4RW5PC5PujToHm6UYtmH3ta4jPVv-0ZExRZEw7HRLXIpolLvDfejfY'

fetch("https://api.spotify.com/v1/search?q=kanye&type=artist" , {
method: "GET",
headers: {
    'Authorization': "Bearer " + _token     
}
//  window.location.reload()
})
.then(response => response.json())
.then((beats) => { 
   
  
  console.log(beats)
    
//     const everything = beats
//     let itemsArray=[]

//     for(let i = 0; i< beats.artists.items.length;i++){
//       itemsArray.push(beats.artists.items[i])
//     }
//     console.log(itemsArray)
})


    // fetch(beats,{
    //     method: "GET",
    //     headers: {
    //         'Authorization': "Bearer " + _token     
    //     }
    //     })
    
    // .then(res=> res.json())
    // .then(data => console.log(data))
    // fetch('http://localhost:3000',{
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({

    //     })
    // })
// })
// document.addEventListener('DOMContentLoaded',(e)=>{
//     e.preventDefault()
//     new SearchBox
// })
// class SearchBox{
//     constructor(){
//         this.seachBox = document.querySelector('.text-field')
//         this.submitBtn = document.querySelector('.submit')
//         this.submitBtn.addEventListener('click',(e)=>{
//             e.preventDefault()
//             window.open("localhost:3000//controller/show/"+this.seachBox.value)
//         })
//     }
// }












// code that josh worked with us on
// fetch('https://accounts.spotify.com/api/token',{
// method: 'POST',
// headers:{
// 	'Content-Type': 'application/x-www-form-urlencoded'
// },
// body: JSON_to_URLEncoded({
// 	redirect_uri: 'http://10.185.0.160:8080',
// 	grant_type: 'authorization_code',
// 	code:'AQCZ-bixGawg5UEDoDhgkeONu9vROLN1lFfItoyT3OI3bHiESEcnDalmRSDJ1hjeqlojSc9uxWxB7cXKZM4ka2uqxXOPWuIDqLtKtnNem87j7TvMm_b1CqVSbjyB48pvUCsRpot5c1vbZ8YPTxFfb_kIPR7H0xwuWvG5F5TaJHohurGKe2N3lGm9-6Z-blq5xNf7lNJMUqqcSoeKOtvF0PSBhnmSFhWKdLMPfD4M0X0odLL85g_60NtV79y-kk3SjGPuRy9c8Izv',
// 	client_id: '55c12b17da23491c82c85edd1c942d61',
// 	client_secret: '190d444411b04417816ac4550e9115c4'
// })
// })

// function JSON_to_URLEncoded(element,key,list){
//   var list = list || [];
//   if(typeof(element)=='object'){
//     for (var idx in element)
//       JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
//   } else {
//     list.push(key+'='+encodeURIComponent(element));
//   }
//   return list.join('&');


// http-server dotify .
// live-server -v
// npm install -g live-server
// live-server .