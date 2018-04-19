const Tree = require('./bplusTree/tree');

let tree = new Tree(5);

let arr = [];

for(let i=1; i<=21; i++){
   let data = {
       'key' : i,
       'value': 'File_' + i + '.txt'
   };

   tree.insert(data);
}

tree.display();
