const DOMSelectors = {
  form: document.querySelector("#form"),
  album: document.querySelector('.album'),
  artist: document.querySelector(".artist"),
  image: document.querySelector('.image')
};
DOMSelectors.form.addEventListener("submit", function(event){
  event.preventDefault
  console.log(DOMSelectors.album.value);
    DOMSelectors.h2s.forEach(
      (el) => (el.textContent = DOMSelectors.album.value)
    );
})