const fs = require('fs');
const Tree = require('./bplusTree/tree');
const TreeUtil = require('./treeUtil');

/**
 * main key-store class that abstracts indexing and I/O functionalities 
 */
class KeyStore{
   constructor(){
      this.index = new Tree(101);
      this.metadata = null;
      this.initialize();
   }

   // build b+ index tree and metadata
   initialize(){
       // 1. load metadata from metadata.txt
       this.metadata = JSON.parse(fs.readFileSync('./data/metadata.txt'));

       // 2. load indices from index.txt
       let indices = JSON.parse(fs.readFileSync('./data/index.txt'));

       // 3. pass indices array to this.index populateTree method
       this.index.populateTree(indices);
   }

   // finds value corresponding to given key
   get(key){
       let response = this.index.search(key);
       let fileData = JSON.parse(fs.readFileSync('./data/files/' + response.data));
    
       //Find and return desired record
       let pos = TreeUtil.binarySearch(fileData, key);
       
       if(pos == -1){
           return 'not found'
       }
       else{
           return fileData[pos].value;
       }
   }

   // save a value and return new generated key
   insert(value){
       // get last record id from metadata and generate key(implementing auto increment ids)
       let key = this.metadata.lastRecordId + 1;

       let filename = '';

       let newRecord = {
        'key' : key,
        'value': value
       }

       // create new file
       if((key-1) % 1000 == 0){
          filename = 'File_' + key + '.txt';
          let fileContents = [];
          fileContents.push(newRecord);
          fs.writeFileSync('./data/files/' + filename, JSON.stringify(fileContents));

          // update index
          this.index.insert({
              'key': key,
              'value': filename
          });
       }
       else{
          filename = this.index.search(key).data;
          console.log(filename)

          let fileContents = JSON.parse(fs.readFileSync('./data/files/' + filename));
          fileContents.push(newRecord);
          fs.writeFileSync('./data/files/' + filename, JSON.stringify(fileContents));
       }

       // update metadata
       this.metadata.lastRecordId = key;
       this.metadata.lastFileName = filename;

       return key;
   }

   //save updated index
   saveIndexAndMetadata(){
       // Save metadata
       fs.writeFileSync('./data/metadata.txt', JSON.stringify(this.metadata));

       // get indices
       let indices = this.index.saveIndices();

       // Save indices array to index file
       fs.writeFileSync('./data/index.txt', JSON.stringify(indices));
   } 
}

module.exports = KeyStore;