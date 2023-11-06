const form = document.querySelector("#form");
console.log(form);
const DOMSelectors = {
  form: document.querySelector("#form"),
  album: document.querySelector("album"),
  artist: document.querySelector("artist"),
  image: document.querySelector("image"),
  gallery: document.querySelector("gallery")
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  document.querySelector(album)
  document.querySelector(artist)
  document.querySelector(image)
  document.querySelector(gallery)


function makeAlbum() {
DOMSelectors.gallery.insertAdjacentHTML ("afterbegin",
`<div class = "card">
<h2 class="card-album"> ${DOMSelectors.album.value}</h2>
<h2 class="card-artist> ${DOMSelectors.artist.value}</h2>
<img src= "${DOMSelectors.image.value}"><img>
</div>`
)}

//const Album = makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButtons

});

function clearFields(){
  let clear = document.querySelectorAll("#form");
  clear.forEach((clear)=>
  clear.addEventListener("submit", function(event){
    console.log()
  })
  )
}

function remove(){
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn) =>
  btn.addEventListener("click", function(event){
    console.log(event.target.parentElement);
  })
  );
}

remove();