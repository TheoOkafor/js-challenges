const getHash = (key, size = 1) => {
  if (typeof key === 'string') {
    let asciiSum = 0;
    for (let i in key) {
      asciiSum += key.charCodeAt(i);
    }
    return asciiSum % size;
  } else if(typeof key === 'number') {
    return key % size;
  }
  throw new Error('invalid key');
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = Array(size);
  }

  add(key, data) {
    const index = getHash(key, this.size);
    if (this.table[index] === undefined) {
      const content = new Map();
      content.set(key, data);
      this.table[index] = content;
    } else {
      this.table[index].set(key, data);
    }
  }

  get(key) {
    const index = getHash(key, this.size);
    return this.table[index].get(key);
  }
}

const myHashTable = new HashTable(9);
myHashTable.add('Theo', { name: 'Theo', colour: 'black'});
myHashTable.add('abiead', { name: 'abiead', colour: 'white'});
myHashTable.add('theo', { name: 'theo', colour: 'black'});
myHashTable.add('stan', { name: 'stan', colour: 'black'});

console.log(myHashTable.get('abiead'));
console.log(myHashTable.table);
