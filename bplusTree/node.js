/**
 * This class defines structure and operations on nodes for a b+ tree
 */

class Node{
   constructor(order, parent){
       this.order = order;
       this.parent = parent;
       this.keys = [];
       this.children = [];
       this.isLeaf = true; // node is leaf by deafault
       this.isInternal = false;
   }

   // only if the node is a leaf node
   addKeyAddress(key, address){
       if(this.isLeaf == true){
          this.keys.push(key);
          this.children.push(address);
       }
       else console.log('Attempting to add address to non leaf node');
   }

   // search for key
   search(key){
       // to do
   }

   // split node when number of keys exceed order
   static splitNode(node){
       // to do
   }
}

module.exports = Node;