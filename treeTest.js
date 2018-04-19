const Tree = require('./bplusTree/tree');

let tree = new Tree(101);

let arr = [];

for(let i=1; i<=2000000; i++){
   let data = {
       'key' : i,
       'value': 'File_' + i + '.txt'
   };

   tree.insert(data);
}
time = Date.now();
console.log(tree.search(466863));
console.log("Found in " + (Date.now()-time)/100 + ' seconds');
