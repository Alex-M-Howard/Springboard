//To get the code to wait  -> await!

async function getData() {
    const response = await axios.get('https://catfact.ninja/breeds?limit=1');
    console.log("This line is after axios.get")
    console.log(response)
}

const getData2 = async () => {
    console.log('hello')
}