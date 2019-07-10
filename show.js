class Show{

    constructor(){

        this.searchTextBox = document.querySelector('.search-box')

        this.submitBtn = document.querySelector('.submitBtn')
        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            fetch(`https://api.spotify.com/v1/search?q=${this.searchTextBox.value}&type=artist` , {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + _token     
            }
            })
            .then(response => response.json())
            .then((beats) => { 
            let itemsArray = []
            console.log(beats)
            for(let i=0; i<beats.artists.items.length; i++) {
                itemsArray.push(beats.artists.items[i])
            }
            this.render(itemsArray)
            })
        })

    }
            render(array) {
                console.log(array)
                let show = document.querySelector('.show')
                
                let cardGroup =  document.createElement('div')
                cardGroup.className = "card-group"
                for(let i = 0; i <array.length;i++){
                    let div = document.createElement('div')
                    div.className = "card"

                    let cardImgTop = document.createElement('img')
                    cardImgTop.className = "card-img-top"

                    if(array[i].images.length!=0){

                        cardImgTop.src = array[i].images[0].url
                        
                        
                    }
                    else{
                        cardImgTop.src = '/server/public/static-img.jpg'
                        
                    }

                    let cardDiv = document.createElement('div')
                    cardDiv.className = 'card-body'

                    let h5 = document.createElement('h5')
                    h5.className = 'card-title'
                    h5.innerText = array[i].name
                    let button = document.createElement('button')
                    button.className = "btn btn-outline-success"
                    button.innerText = "See this artist"

                

                    cardDiv.append(h5, button)
                    div.append(cardImgTop, cardDiv)
                    cardGroup.append(div)
                    
                }
            show.append(cardGroup)
            }

}