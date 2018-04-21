const KeyStore = require('./keyStore');

// build tree
let time = Date.now();
let keyStore = new KeyStore();
console.log("Index built in " + (Date.now() - time)/1000 + " seconds");

// insert value
time = Date.now();
let key = keyStore.insert('This works ' + Date.now());
console.log("Data inserted in " + (Date.now() - time)/1000 + " seconds");

// read inserted data
time = Date.now();
let data = keyStore.get(key);
console.log("Data found in " + (Date.now() - time)/1000 + " seconds");

console.log(data);

keyStore.saveIndexAndMetadata();
