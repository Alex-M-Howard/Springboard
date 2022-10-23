let favNumber = 5;

let baseURL = "http://numbersapi.com";

// 1

async function getNumberInfo() {
  let response = await axios.get(`${baseURL}/${favNumber}?json`)
  console.log(response.data.text);
}



// 2 
async function getNumbersInfo() {
  let response = await axios.get(`${baseURL}/${favNumber},1..3?json`)
  console.log("Exercise 2");
  for (let each in response.data) {
    console.log(response.data[each]);
  }
}

// 3
    
    
getNumberInfo();                  // 1
getNumbersInfo();                 // 2

for (let i = 0; i < 5; i++){      // 3
  getNumberInfo();
}