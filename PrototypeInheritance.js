let dragon = {
    name: 'Julius',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

//Accemos al prototype en la cadena, es decir, dragon, y podemos obtener los metodos del objeto anterior
lizard.__proto__ = dragon;
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

//console.log(lizard.fight())
//console.log(dragon.isPrototypeOf(lizard))

//EXERCISE
//#1 Date object => to have a new method .lasYear() which shows you last year YYYY format

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
};

const currentDate = new Date('1998-10-10');
console.log(currentDate.lastYear())

//EXERCISE 
//Modify .map() to print a map at the end of each item

Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + ' map'))
    }
    return arr
}

console.log([1, 2, 3].map())

const array = ['hey','one'];
array[10] = 'baz';
console.log(array);
console.log(array.length);

//RECURSION - Devolver un string en sentido contrario

const str= "hello";

function solution(str){
    //base case
    if(str.length === 0){
        return "";
    }
    //recursion
    console.log(str[str.length-1] + solution (str.slice(0,str.length-1)))
    return str[str.length-1] + solution (str.slice(0,str.length-1))
    
}

console.log(solution(str))


