const express = require("express");

const app = express();

app.get('/', (request, response) => {
    return response.send('Dogs bark bitch')
})

app.listen(3000, function () {
  console.log("App on port 3000");
});
