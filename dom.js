const form = document.querySelector("#form");
console.log(form)
const DOMSelectors = {
  form: document.querySelector("#form"),
  album: document.querySelector("album"),
  artist: document.querySelector("artist"),
  image: document.querySelector("image"),
  h2s: document.querySelectorAll("h2"),
  gallery: document.querySelector("gallery")
};

function backgroundandtext(background, text) {
  background.style.backgroundColor = "pink"
  text.textContent
}

DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(DOMSelectors.album.value,);
    DOMSelectors.h2s.forEach((el) => el.textContent = DOMSelectors.album.value)
});


function makeAlbum() {
document.querySelector("gallery")
}

DOMSelectors.gallery.insertAdjacentHTML(
  "beforeend"
)