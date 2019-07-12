class Show {
  constructor() {
    let show = document.querySelector(".show");
    this.searchTextBox = document.querySelector(".search-box");
    this.playlistBtn = document.querySelector(".playlist");
    this.submitBtn = document.querySelector(".submitBtn");
    console.log(this.playlistBtn)
    this.playlistBtn.addEventListener("click", e => {
        e.preventDefault()
        show.innerHTML = "";
        fetch('http://localhost:3000/playlist')
        .then(res => res.json())
        .then(data => this.renderPlaylist(data))
    })

    this.submitBtn.addEventListener("click", e => {
      e.preventDefault();
      show.innerHTML = "";
      fetch(
        `https://api.spotify.com/v1/search?q=${
          this.searchTextBox.value
        }&type=artist`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + _token
          }
        }
      )
        .then(response => response.json())
        .then(beats => {
          let itemsArray = [];
          console.log(beats);
          for (let i = 0; i < beats.artists.items.length; i++) {
            itemsArray.push(beats.artists.items[i]);
          }
          this.render(itemsArray);
        });
    });
  }
  renderPlaylist(array){
    
    console.log(array)
    let show = document.querySelector(".show");
    show.innerHTML = ""
    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";
    
        let div = document.createElement("div");
        div.className = "card";

        let cardImgTop = document.createElement("img");
        cardImgTop.className = "card-img-top";
        cardImgTop.src = "public/fire.jpg"

        let cardDiv = document.createElement("div");
        cardDiv.className = "card-body";

        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = "My Totally Super Awesome Fire Playlist"

        let h7= document.createElement("h7");
        h7.className = "playlist-size";
        h7.innerText = "Total songs: " + array.length;

        cardDiv.append(h5,h7);
        div.append(cardImgTop, cardDiv);
        cardGroup.append(div);
    
    show.append(cardGroup);
  }
  render(array) {
    console.log(array);
    let show = document.querySelector(".show");

    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";
    for (let i = 0; i < array.length; i++) {
      let div = document.createElement("div");
      div.className = "card";

      let cardImgTop = document.createElement("img");
      cardImgTop.className = "card-img-top";

      if (array[i].images.length != 0) {
        cardImgTop.src = array[i].images[0].url;
      } else {
        cardImgTop.src = "public/static-img.jpg";
      }

      let cardDiv = document.createElement("div");
      cardDiv.className = "card-body";

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText = array[i].name;

      cardDiv.append(h5);
      div.append(cardImgTop, cardDiv);
      cardGroup.append(div);

      div.addEventListener("click", e => {
        e.preventDefault();
        show.innerHTML = "";
        fetch(`https://api.spotify.com/v1/artists/${array[i].id}/albums`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + _token
          }
        })
          .then(response => response.json())
          .then(albumArray => {
            console.log(albumArray, "this is albumArray ");
            this.renderAlbums(albumArray);
          });
      });
    }
    show.append(cardGroup);
  }
  renderAlbums(array) {
    let show = document.querySelector(".show");

    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";
    for (let i = 0; i < array.items.length; i++) {
      let div = document.createElement("div");
      div.className = "card";

      let cardImgTop = document.createElement("img");
      cardImgTop.className = "card-img-top";

      if (array.items[i].images.length != 0) {
        cardImgTop.src = array.items[i].images[0].url;
      } else {
        cardImgTop.src = "public/static-img.jpg";
      }

      let cardDiv = document.createElement("div");
      cardDiv.className = "card-body";

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText = array.items[i].name;


      cardDiv.append(h5);
      div.append(cardImgTop, cardDiv);
      cardGroup.append(div);

      div.addEventListener("click", e => {
        e.preventDefault();
        show.innerHTML = "";
        fetch(`https://api.spotify.com/v1/albums/${array.items[i].id}/tracks`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + _token
          }
        })
          .then(response => response.json())
          .then(trackArray => {
            console.log(trackArray, "this is trackArray ");
            this.renderTracks(trackArray);
          });
      });
    }
    show.append(cardGroup);
  }
  renderTracks(array) {
    let show = document.querySelector(".show");

    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";
    for (let i = 0; i < array.items.length; i++) {
      let div = document.createElement("div");
      div.className = "card";

      let cardImgTop = document.createElement("img");
      cardImgTop.className = "card-img-top";

      cardImgTop.src = "public/disc.jpg";

      let cardDiv = document.createElement("div");
      cardDiv.className = "card-body";

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText = array.items[i].name;

      let h7 = document.createElement("h7");
      h7.className = "card-title";
      h7.innerText = array.items[i].artists[0].name;

      // let button = document.createElement('button')
      // button.className = "btn btn-default btn-lg"
      // button.setAttribute("type","button")

      // let span = document.createElement('span')
      // span.className = "glyphicon glyphicon-star g-links"
      // span.setAttribute("aria-hidden", "true")

      // button.append(span)

      //     <button type="button" class="btn btn-default" aria-label="Left Align">
      //     <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
      //   </button>

      cardDiv.append(h5, h7);
      div.append(cardImgTop, cardDiv);
      cardGroup.append(div);
      div.addEventListener("click", e => {
        e.preventDefault();
        console.log(array.items[i])
        
        fetch(`http://localhost:3000/add-song`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: array.items[i].name,
            my_playlist_id: '1'
        })
        })
    })
        show.append(cardGroup);
    }
}
}
