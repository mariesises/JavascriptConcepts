let user = {
    age:54,
    name:'lyla',
    magic:true,
    scream: function(){
        console.log('aaaaaaaaaaaaaah')
    }
}

user.age
user.spell = 'abra kadabra'
console.log(user)


class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  console.log(myHashTable._hash('grapes'))
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  