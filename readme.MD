# Shivank-db
A fast key value storage application using B+ tree indexing in nodejs.

## Benchmarks
DB containing 16,000,000 records
- Single read operation 0.001 sec
- Single write operation 0.002 sec

## Working
### Organizing data
The data is organized in increasing order of the keys, with each single data file containing 1000 records. Names of the files and the first 
key value that it contains, are stored as index values in the file `index.txt`. The key of last record with last created file are
stored in `metadata.txt`, to keep track of auto increment value.

### Searching and inserting for new key-values
The values contained in `index.txt` are loaded when a new instance of `KeyStore` is created. These indices are organized as a B+
tree with leaf nodes containing filenames and keys from the `index.txt`. For a given key, the application searches the tree for the
filename in the key-filename pair such that the desired record is present in that file. Once the filename is obtained, the file consisting
of 1000 records is loaded in memory and target key is searched for. Similarly for insertion, filename is obtained from B+ tree and
desired key-value pair are inserted in the file. The B+ tree has an order of `101`, so it can hold large number of records within few 
levels.