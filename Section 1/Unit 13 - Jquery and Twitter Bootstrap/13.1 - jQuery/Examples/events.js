// 1: Vanilla Events on Items
//
//   Adds click handler directly to existing <li>s
//   Doesn't work for newly-added <li>s

for (let li of document.body.querySelectorAll("#one li")) {
  li.addEventListener("click", function (evt) {
    evt.target.parentNode.removeChild(li);
  });
}

// 2: Vanilla Delegation
//
//   Adds click handler to <ul>, checks if click is one <li>
//   Does work for newly-added <li>s

document.body.querySelector("#two ul")
  .addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
      evt.target.parentNode.removeChild(evt.target);
    }
});


// 3: jQuery Events on Items
//
//   Adds click handler direclty to existing <li>s
//   Doesn't work for newly-added <li>s

$("#three li").on("click", function (evt) {
  $(evt.target).remove();
});


// 4: jQuery Delegation
//
//   Adds click handler to <ul>, checks if click is on <li>
//   Does work for newly-added <li>s

$("#four ul").on("click", "li", function (evt) {
  $(evt.target).remove();
});




// Make "add new" buttons add a new <li>

let newNum = 1;

for (let id of ["one", "two", "three", "four"]) {
  $(`#${id} button`).on("click", function (evt) {
    $(`#${id} ul`).append(`<li>new ${newNum++}</li>`);
  });
}

