window.onload = function () {
  let mood = document.querySelector("#mood");
  const happy = document.querySelector("#happy");
  const sad = document.querySelector("#sad");
  const angry = document.querySelector("#angry");
  const confused = document.querySelector("#confused");

  mood.innerText = store.getState().mood;

  happy.addEventListener("click", () => {
    store.dispatch({ type: "HAPPY" });
    mood.innerText = store.getState().mood;
  })

  sad.addEventListener("click", () => {
    store.dispatch({ type: "SAD" });
    mood.innerText = store.getState().mood;
  })

  angry.addEventListener("click", () => {
    store.dispatch({ type: "ANGRY" });
    mood.innerText = store.getState().mood;
  })

  confused.addEventListener("click", () => {
    store.dispatch({ type: "SLEEPY" });
    mood.innerText = store.getState().mood; 
  })

}