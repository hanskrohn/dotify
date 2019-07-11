class Album extends Show {

    constructor(array){
        
        super()
        this.albumDiv = document.querySelector('.albums')
        this.array = array
        this.render(this.array)
    }
    render(array){
        for(let i = 0; i <array.length;i++){
            let div = document.createElement('div')
            div.className = "card"

            let cardImgTop = document.createElement('img')
            cardImgTop.className = "card-img-top"

            if(array.length!=0){

                cardImgTop.src = array.items[i].images[0].url
                
                
            }
            else{
                cardImgTop.src = 'public/static-img.jpg'
                
            }

            let cardDiv = document.createElement('div')
            cardDiv.className = 'card-body'

            let h5 = document.createElement('h5')
            h5.className = 'card-title'
            h5.innerText = array.items[i].name
            
        

            cardDiv.append(h5)
            div.append(cardImgTop, cardDiv)
            this.cardGroup.append(div)

            div.addEventListener('click', (e) => {
                e.preventDefault()
                show.innerHTML = ""
                fetch(`https://api.spotify.com/v1/albums/${array.items[i].id}/tracks` , {
                    method: "GET",
                    headers: {
                        'Authorization': "Bearer " + _token     
                    }
                    })
                    .then(response => response.json())
                    .then((trackArray) => { 
                        console.log(trackArray, "this is trackArray ")
                    this.renderTracks(trackArray) 
                        

                    
                    })
                })

    }
    this.show.append(cardGroup)

    }
}