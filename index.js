
    fetch('http://localhost:3000/songs/1')
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        console.log(result)
    })
id = '3n3Ppam7vgaVa1iaRUc9Lp'    

token = 'BQA3KJN29pOxnnZTNBl045MacCJHazyaK64qrpbk0rqfOvnYCrSJraTZ-88wWBz-TuQO_GCPvdiBR6db9riP4pMbNErP5WNG-qxqFJuv02uE-6QZKX1sISC8GP6Xhz-rvsI5FfpRRC9UdSvdLR1inU5ZAwFW7vy4YSlbenaHXI_2MadT6cnhX8NRMjSpfp1bvZWsSbARRZ7kuTUNWbWAvS9EeVU98kmU6gXwv0JUMKxVHxsPaJ-r-bf-vwJD0mPGpY6FGaj4jg3A656ObuBTc4OTUncvEMWB3o4'

fetch("https://api.spotify.com/v1/tracks/" + id, {
  method: "GET",
  headers: {
    Authorization: "Bearer " + token     
  }
})
.then(response => response.json())
.then((beats) => { console.log(beats)
})