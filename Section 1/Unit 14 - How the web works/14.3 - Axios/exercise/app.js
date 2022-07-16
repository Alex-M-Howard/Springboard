
const api_key = 'j1u39h1te703BwYOw4lg1lVL5PT0GMa7' 
const searchEndpoint = 'http://api.giphy.com/v1/gifs/search'
const searchButton = document.querySelector("#search-button")
const removeButton = document.querySelector("#remove-images")

searchButton.addEventListener("click", (event) => {
    event.preventDefault;
    const search = document.querySelector("#search-box").value; 
    if (search) {
        document.querySelector("#search-box").value = "";
        searchGiphy(search);    
    }
    return
})

removeButton.addEventListener("click", (event) => {
    event.preventDefault;
    let gifs = document.querySelectorAll(".gif");
    for (let gif of gifs) {
        gif.remove();
    }
})

const searchGiphy = async (q) => {   
    const params = { api_key, q }
    addGif(await axios.get(searchEndpoint, { params }));
}

const addGif = (response) => {
    const url = response.data.data[0].images.original.url
    let img = document.createElement("img");
    img.src = url;
    img.classList.add("col-4");
    img.classList.add("gif");
    document.querySelector("#gif-area").append(img)
    console.log(url)
}

