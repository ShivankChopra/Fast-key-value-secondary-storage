const KeyStore = require('./keyStore');

let time = Date.now();
let keyStore = new KeyStore();
console.log("Index built in " + (Date.now() - time)/1000 + " seconds");

time = Date.now();
let data = keyStore.get(3765);
console.log("Data found in " + (Date.now() - time)/1000 + " seconds");

console.log(data);