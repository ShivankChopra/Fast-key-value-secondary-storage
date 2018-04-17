const fs = require('fs');

const TARGET = 2000000;
const POSSIBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// hold cached records
let file = [];

// load metadata
let metadata = JSON.parse(fs.readFileSync('./data/metadata.txt'));

let fileIndex = metadata.lastRecordId + 1;
console.log(fileIndex);

// load index
let index = JSON.parse(fs.readFileSync('./data/index.txt'));

// generate 50 bytes string
function randomString(){
    let text = '';
    for(let i = 1; i<50; i++){
        text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
    }
    return text;
}

/* generate target number of files */
for(let i = fileIndex; i <= TARGET + metadata.lastRecordId + 1; i++){
    let filePath = './data/files/' + fileIndex + '.txt';
    
    if((i-1)%1000 === 0){ 
        // save cached records
        fs.writeFileSync(filePath, JSON.stringify(file));
        file = [];

        // set new fileindex
        fileIndex = i;
        index.push(i);
    }    
    
    let data = {
        'key' : i,
        'value': randomString()
    }

    file.push(data);

    metadata.lastFileName = filePath;
}

metadata.lastRecordId = metadata.lastRecordId + TARGET;

//save sorted index array
fs.writeFileSync('./data/index.txt', JSON.stringify(index));

// save updated metadata
fs.writeFileSync('./data/metadata.txt', JSON.stringify(metadata));