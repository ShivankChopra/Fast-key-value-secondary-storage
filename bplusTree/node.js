/**
 * This class defines structure and operations on nodes for a b+ tree
 */

class Node{
   constructor(){
       this.parent = null;
       this.keys = [];
       this.children = [];
       this.isLeaf = true; // node is leaf by deafault
       this.nextNode = null;
       this.prevNode = null;
   }

   insertKey(key){
      let i = this.keys.length - 1;
      while(key < this.keys[i] && i>=0){
          i--;
      }

      this.keys.splice(i+1, 0, key);
   }
}

module.exports = Node;