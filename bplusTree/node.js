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
   addKeyFilename(key, address){
       // if internal, traverse down through children
       // else insert in the appropriate place(practically will be last index)
       // and handle splitting
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