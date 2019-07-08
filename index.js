
    fetch('http://localhost:3000/songs/1')
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        console.log(results)
    })