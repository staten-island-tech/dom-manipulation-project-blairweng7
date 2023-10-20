const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.album.value);
  DOMSelectors.h2s.forEach(
    (el) => (el.textContent = DOMSelectors.album.value)
  );
});

function makeAlbum() {

}

function addCard (Album) {
  document.querySelector(".gallery")
  .insertAdjacentHTML (
      
  )
}

DOMSelectors.form ,addEventListener("submit", function (event) {
  event.preventDefault();
})