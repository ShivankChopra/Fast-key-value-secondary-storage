const TreeUtil = require('./treeUtil');

let arr = [1, 2, 3, 4, 5, 6];
let children = ["chaar", "paanch", "66", "89", "126", "256"];
/*let node = {
   'isChild' : true,
   'keys' : arr,
   'children': children
};

TreeUtil.insertKeyValue(node, 15, "lol");

node.children.forEach((val) => console.log(val));*/

let mid = Math.ceil((arr.length - 1)/2);
arr2 = arr.splice(mid, mid+1);
console.log(mid)
//arr2.splice(0,1);
console.log(arr);
console.log(arr2)