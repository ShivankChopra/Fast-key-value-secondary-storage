/**
 * Contains utility searching methods
 */
class TreeUtil{

    // returns the value of index that needs to be followed to reach leaves
    static getRouteIndex(arr, data){
        let i = arr.length -1;
        while(data<arr[i] && i>=0){
           i--;
        }
    
        return i+1;
    }

    // return index of an item, -1 if not present
    static binarySearch(arr, data){
        let start = 0, end = arr.length -1;
        let mid = Math.floor((start + end)/2);
        let found = false;

        while(start <= end){
            if(data == arr[mid]){
                found = true;
                break;
            }
            else if(data > arr[mid]){
                start = mid + 1;
            }
            else if(data < arr[mid]){
                end = mid - 1;
            }

            mid = Math.floor((start + end)/2);
        }
        
        if(found) return mid;
        else return -1;
    }

    // insert data or child to the given node at proper position
    static insertKeyValue(node, data){
        let keys = node.keys;
        let children = node.children;
        
        // get position
        let i = keys.length - 1;
        while(data.key < keys[i] && i>=0){
            i--;
        }

        // insert keys and values
        keys.splice(i+1, 0, data.key);

        if(node.isLeaf)
            children.splice(i+1, 0, data.value);        
    }
}

module.exports = TreeUtil;