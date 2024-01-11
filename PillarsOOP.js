class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon)
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    attack() { // we can redifine the method in other class to change the return 
        return 'aaaaaaaaaarrrrgh' 
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'bat', 'green')
console.log(shrek.makeFort())
console.log(shrek.attack())

///
class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }

  class Queen extends Character{
    constructor(name, weapon,type){
        super(name,weapon);
        this.type = type;
    }
    attack(){
        return 'I am the ' + this.name + ' of ' + this.type + ', now bow down to me!'
    }
  }
  //Polymorphism--
  //Extend the Character class to have a Queen class. The output of the below code should be:
  const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
  
  console.log(victoria.attack()) // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
  