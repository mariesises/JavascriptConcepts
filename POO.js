//factory functions es una funcion que crea objetos 

/**
 * @param {number[]} nums
 * @return {number[]} nums
 */

const moveZeros = function (nums) {
    let right = 0;
    let left = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right]], [nums[left]]
            left++
        }
        right++
    } return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0]))

// .this
//new binding this, esto permite asignar el this al objeto que instanciamos
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)
console.log(person1)

// implicit binding // el this está implicito en el propio objeto por lo tanto se refiere al mismo
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi ' + this.name)
    }
}
person.hi()

// explicit binding, implica usar bind, call or apply para definir que queremos que haga
const person3 = {
    name: 'Albert',
    age: 40,
    hi: function () {
        console.log('hi ' + this.setTimeout)
    }.bind(window)
}
person3.hi()

//arrow functions // lexical scoping indica que se ejecutará el codigo según el orden en el que esté escrito
const person4 = {
    name: 'Albert',
    age: 40,
    hi: function () {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner();
    }
}
person4.hi()
//En este caso, al no usar una arrow function indica que simplemente llama a la funcion de window pero no accede al parametro anterior 
const person5 = {
    name: 'Albert',
    age: 40,
    hi: function () {
        var inner = function(){
            console.log('hi ' + this.name)
        }
        return inner();
    }
}
person5.hi()

