const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
  };

  function makeAlbum() {

  }

  function addCard (Album) {
    document.querySelector(".gallery")
    .insertAdjacentHTML (
        "afterbegin",
        '<div class></div>'
    )
  }

  DOMSelectors.form addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector(".gallery")
    .insertAdjacentHTML (
        "afterbegin",
        '<div class></div>'
    )
  }
  )