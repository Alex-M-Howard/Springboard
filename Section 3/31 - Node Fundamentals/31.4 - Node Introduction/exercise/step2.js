const fs = require("fs");
const process = require("process");
const axios = require('axios');

const cat = path => {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.log(data);
    process.exit(0);
  });
};

const webCat = (url) => {
    axios.get(url).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error.code)
        process.exit(1)
    })
}

for (let i = 2; i < process.argv.length; i++) {
    fs.stat(process.argv[i], (err, stats) => {
        if (!err) {
            cat(process.argv[i])
        } else {
            webCat(process.argv[i])
            }
    })
}


