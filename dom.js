/*
Create an object called “DOMSelectors” to hold your DOM Selectors
Create a function that creates an object and calls the following functions
Create a function that injects the newly created object into the DOM
Create a function that clears the input fields after injecting the object
Create a function to remove an object after they have been created
*/

const DOMSelectors = {
  form: document.querySelector("#form"),
  album: document.getElementById("album-name"),
  artist: document.getElementById("artist-name"),
  image: document.getElementById("image-link"),
  box: document.querySelector("#box"),
  card: document.querySelector(".card"),
  button: document.getElementById("btn"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  addcard();
removecard();
clearFields();
});

function addcard() {
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<div class="card" id="box">
        <h1 class="album-name"> ${DOMSelectors.album.value} </h1>
        <h3 class="artist-name"> ${DOMSelectors.artist.value} </h3>
        <img src= "${DOMSelectors.image.value}" alt="image" class="card-image">
        <button class="remove"> Remove </button>
        </div>`
  );
}

function removecard() {
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.target.parentElement.remove();
    });
  });
}

function clearFields() {
  DOMSelectors.album.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.image.value = "";
}


/*function remove(){
  button.forEach((btn) =>
  btn.addEventListener("click", function(event){
    console.log(event.target.parentElement);
  })
  );
}*/
