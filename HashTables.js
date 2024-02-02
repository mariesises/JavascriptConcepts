let user = {
  age: 54,
  name: 'lyla',
  magic: true,
  scream: function () {
    console.log('aaaaaaaaaaaaaah')
  }
}

user.age
user.spell = 'abra kadabra'
console.log(user)


class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      console.log(this.data)
    }
    this.data[address].push(key, value)
    console.log(this.data)
    return this.data
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket)
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0])
      }
    }
    return keysArray
  }
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][1])
      }
    }
    return valuesArray
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 20)
myHashTable.set('oranges', 2)
myHashTable.get('oranges')
myHashTable.keys();
console.log(myHashTable.keys())
console.log(myHashTable.values())
