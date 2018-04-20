const Tree = require('./bplusTree/tree');

let tree = new Tree(101);

let indices = [];

for(let i=1; i<=20000; i++){
   let data = {
       'key' : i*1000,
       'value': 'File_' + i*1000 + '.txt'
   };

   indices.push(data);
}

let time = Date.now();
tree.populateTree(indices);
console.log("Tree built in " + (Date.now()-time)/1000 + ' seconds');

time = Date.now();
console.log(tree.search(467000));
console.log("Found in " + (Date.now()-time)/1000 + ' seconds');

//let res = tree.saveIndices();
//console.log(res);