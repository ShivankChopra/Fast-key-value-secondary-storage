/**
 * Maintains B+ tree index and perform search and insert operations
 */
const Node = require('./node');
const TreeUtil = require('../treeUtil');

//const TREE_ORDER = 101;

 class Tree{
    constructor(order){
       this.order = order;
       this.root = null;
    }

    // returns filename containing record corresponding to key 
    search(key, node = this.root){
        if(node.isLeaf == true){            
            let filePos = TreeUtil.getRouteIndex(node.keys, key);
            if(filePos == -1){
                return {
                    'found' : false,
                    'data'  : 'not found'
                };
            }
            else{
                return {
                   'found' : true,
                   'data'  : node.children[filePos -1]
                };
            }
        }
        else{
            let index = TreeUtil.getRouteIndex(node.keys, key);
            return this.search(key, node.children[index]);
        }
    }

    insert(data){
        let node = this.root;

        // empty tree
        if(this.root == null){
            node = new Node();
            node.keys.push(data.key);
            node.children.push(data.value);
            this.root = node;
        }
        else{
            if(!node.isLeaf){
                while(!node.isLeaf){
                    let index = TreeUtil.getRouteIndex(node.keys, data.key);
                    node = node.children[index];
                }
            }

            TreeUtil.insertKeyValue(node, data);
            if(node.keys.length > this.order - 1)
                this.split(node);

            // update root after insertion, if new level is introduced    
            if(this.root.parent != null){
                node = this.root;
                while(node.parent != null)
                   node = node.parent;

                this.root = node;   
            }    
        }
    }

    split(node){
        let midKey = Math.ceil((node.keys.length - 1)/2);
        let midChild = Math.ceil((node.children.length - 1)/2);
        let midValue = node.keys[midKey];

        let newKeys = node.keys.splice(midKey, midKey + 1);
        let newChildren = node.children.splice(midChild, midChild + 1);

        if(!node.isLeaf) // dont copy mid element in splitted node if internal
           newKeys.splice(0, 1);

        let newNode = new Node();
        newNode.keys = newKeys;
        newNode.children = newChildren;

        if(node.isLeaf){
            newNode.prevNode = node;
            node.nextNode = newNode;
        }
        else{
            newNode.isLeaf = false;
            // children were pointing to old node
            newChildren.forEach(child => child.parent = newNode);
        }
        let parent = null;

        if(node.parent == null){
            parent = new Node();
            parent.isLeaf = false;
            node.parent = parent;
            newNode.parent = parent;    
            
            parent.children.push(node);
            parent.children.push(newNode);
        }
        else{
            parent = node.parent;
            parent.children.push(newNode); // verify correctness
            newNode.parent = parent;
        }

        parent.insertKey(midValue);

        if(parent.keys.length > this.order - 1)
           this.split(parent);
   
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