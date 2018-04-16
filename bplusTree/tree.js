/**
 * Maintains B+ tree index and perform search and insert operations
 */
const Node = require('./node');

const TREE_ORDER = 101;

 class Tree{
     constructor(){
        this.order = TREE_ORDER;
        this.root = new Node(this.order, null);
     }

     // returns filename containing record corresponding to key 
     search(key){
         return this.root.search(key);
     }

     // update index for a newly created file
     insert(key, filename){
         return this.root.addKeyFilename(key, filename);
     }

     // build tree from index
     populateTree(indices){
         // to do
     }

     // save indices to array by leave traversal
     saveIndices(){
         // do leave traversal and add key-address pairs to indices array
         // then return updated indices array
     }


 }

 module.exports = Tree;