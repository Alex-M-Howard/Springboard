let favNumber = 5;

let baseURL = "http://numbersapi.com";

// 1
$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
  console.log(data);
});


// 2 
$.getJSON(`${baseURL}/${favNumber},1..3?json`).then((data) => {
  console.log(data);
});

//3
$.getJSON(
    `${baseURL}/${favNumber}?json`)
    .then((data) => {console.log(data);
        return $.getJSON(`${baseURL}/${favNumber}?json`)
            .then((data) => {console.log(data)
                return $.getJSON(`${baseURL}/${favNumber}?json`)
                    .then((data) => {console.log(data)
                        return $.getJSON(`${baseURL}/${favNumber}?json`)
                            .then((data) => {console.log(data)})
                  })
        })
    })
    
    
