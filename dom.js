const form = document.querySelector("#form");
console.log(form);
const DOMSelectors = {
  form: document.querySelector("#form"),
  album: document.querySelector("album"),
  artist: document.querySelector("artist"),
  image: document.querySelector("image"),
  h2s: document.querySelectorAll("h2"),
  gallery: document.querySelector("gallery"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
});

function makeAlbum() {
  document.querySelector("album");
  document.querySelector("artist");
  document.querySelector("image");
  DOMSelectors.insertAdjacentHTML ("beforeend", '${album.value}','${artist.value}','${image.value}')
 // <h2></h2>
 // <h3></h3>
 // <h4></h4>
}
makeAlbum();

function clearCard(){

}

function removeObject(){

}

//DOMSelectors.gallery.insertAdjacentHTML("beforeend",);
