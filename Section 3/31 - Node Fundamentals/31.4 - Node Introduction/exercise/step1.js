const fs = require('fs')
const process = require('process')

const cat = (path) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            console.error(error);
            process.exit(1);
        }        
        console.log(data)
        process.exit(0);
    })
}

cat(process.argv[2]);
