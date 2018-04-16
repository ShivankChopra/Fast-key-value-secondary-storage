const fs = require('fs');
const Tree = require('../bplusTree/tree');
/**
 * main key-store class that abstracts indexing and I/O functionalities 
 */
class KeyStore{
   constructor(){
      this.index = new Tree();
      this.metadata = null;
      this.initialize();
   }

   // build b+ index tree and metadata
   initialize(){
       // 1. load metadata from metadata.txt
       // this.metadata = JSON.parse(fs.readFileSync('../data/metadata.txt'));

       // 2. load indices from index.txt
       // let indices = JSON.parse(fs.readFileSync('../data/index.txt'));

       // 3. pass indices array to this.index populateTree method
       // this.index.populateTree(indices);
   }

   // finds value corresponding to given key
   get(key){
       // 1. Obtain filename from index
       // let filename = this.index.search(key);

       // 2. Load file with obtained filename (set 1000 records per file)
       // let fileData = JSON.parse(fs.readFileSync('../data/files/filename.txt'));

       // 3. Find and return desired record
   }

   // save a value
   insert(value){
       // 1. get last record id from metadata and generate key(implementing auto increment ids)
       // let key = this.metadata.lastrecordId + 1;

       // 2. If key is multiple of 1000(every 1000th record must be saved in a new file)
       // fs.writeFileSync('newFileName', 'key-value pair');
       // then update index entry
       // this.index.insert(key, newFileName);

       // 2. (alt) If key isn't multiple of 1000, query index to find desired filename 
       // and append entry
       // let filename = this.index.search(key);
       // fs.appendFileSync('../data/files/filename.txt', key-value-data);
   }

   //save updated index
   saveIndexAndMetadata(){
       // 1. Save metadata
       // fs.writeFileSync('../data/metadata.txt', JSON.stringify(metadata));

       // 2. Do leave traversal and fill an indices array
       // let indices = this.index.saveIndices();

       // 3. Save indices array to index file
       // fs.writeFileSync('../data/index.txt', JSON.stringify(indices));
   } 
}

module.exports = KeyStore;