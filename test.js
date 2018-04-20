const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data/metadata.txt'));

console.log(data);