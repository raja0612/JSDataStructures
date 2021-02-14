/*
Hash tables are used to store key - value pairs.
They are like arrays but the keys are not ordered.

Unlike arrays, Hash tables are fast for all of the following operations:
finding values, adding new values, removing values.


Hash function is convert keys into hash value

What makes a good hash?

1. Fast (i.e. constant time)
2. Doesn't cluster o/ps at specific indices, but distributes uniformly
3. Deterministic (same i/p yields same o/p)
*/

function hash(key, arrLen) {
    let hashValue = 0;
    for(let char of key) {
      let value = char.charCodeAt(0) - 96;
      hashValue = (hashValue + value) % arrLen;
    }
 console.log(hashValue)
 return hashValue;
}

hash("red", 10);
hash("green", 10);
hash("blue", 10);


/*
problems with above function.
    1. Only hashes strings.
    2. Not constant time - if string length is increased, then time to loop will increase
    3. could be a little more random
*/

function improvedHash(key, arrLen) {
    let hashValue = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 4); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      hashValue = (hashValue  * WEIRD_PRIME + value) % arrLen;
    }
 console.log(hashValue)
 return hashValue;
}

console.log("***********IMPROVED HASH**************")
improvedHash("cyan", 10);
improvedHash("cyane", 10);

/*

In the above improved hash function, there might be chance
to get two keys has same hash value if first 4 characters of two keys are same

To avoid collisions in hash table.

There are two stratagies.

1. Separate Chaining = storing same hash value in nested data structure like nested arrays
   from above example

   [["cyan"], ["cyane"]]

2. Linear Probing = store one value at specified index, store next same hash value at next available index.

  [cyan] -> [cyane] -> [cyanee]
  0  ->   1   -> 2
*/


console.log("***********MORE IMPROVED HASH with Separate Chaining**************")

class HashTable {
    constructor(size){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]) {
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) { // check value at index 0 ; ["maroon","#800000"]
            return this.keyMap[index][i][1] // return value at index 1 ; ["maroon","#800000"]
          }
        }
      }
      return undefined;
    }

    keys() {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++){
                     //add only unique keys
                     if(!keys.includes(this.keyMap[i][j][1])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
          }
      return keys;
    }

    values() {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    //add only if value is not added before for getting unique values
                    if(!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
          }
     return values;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000") //maroon , yellow collide and stored in same index array with nested values
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  ht.set("purple","#DDA0DD")
  ht.set("voilet","#DDA0DD")
  ht.set("voilet","#DDA0DD")

  console.log(JSON.stringify(ht));
  console.log(ht.get("yellow"))
  console.log(ht.get("maroon"))
  console.log(ht.get("salmon"))

  console.log("KEYS")
  console.log(JSON.stringify(ht.keys()))

  console.log("VALUES")
  console.log(JSON.stringify(ht.values()))
  