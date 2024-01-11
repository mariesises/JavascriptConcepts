function someCalc(x, y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    someCalc(5, 4);
}

console.log("Hola");
console.log(someCalc(5, 4));

//Global variables
var a = 1;
var b = 1;

//Event listeners
var element = document.getElementById('button');
element.addEventListener('click',onclick);



//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
var item = list.pop();
 
function removeItemsFromList() {
    setTimeout(()=>{
        if (item) {
            removeItemsFromList();
        }
    },0)
};
 
removeItemsFromList();

//Dynamic Scope/ Lexical Scope

const a = function(){
    console.log('a', this)
    const b = function(){
        console.log('b',this)
        const c = {
            hi: function(){
                console.log('c',this)
            }
        };c.hi ()   
    }
    b()
}
a()

const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

console.log(getMaxNumber(array));

//devolverá los valores dados 
 var b = {
    name: 'jay',
    say() {
        console.log(this)
    }
 }

 //Esta llamando a una funcion dentro de otra por lo que solo devolverá el objeto windows
 var c = {
    name:'jay',
    say(){return function(){console.log(this)}}
 }

 //Lexical scope - devuelve el valor de la funciona no importa desde donde lo llames
 var d = {
    name:'jay',
    say(){return () => console.log(this)}
 }

 //Ejercicio
 const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  var giveMeTheCharacterNOW = character.getCharacter();
   
  //How Would you fix this?
  console.log(giveMeTheCharacterNOW);

  //Otra forma de resolverlo es usando bind porque puede llamar a las variables del personaje desde otra variable
  const character2 = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character2.getCharacter.bind(character2);
  console.log(giveMeTheCharacterNOW());
