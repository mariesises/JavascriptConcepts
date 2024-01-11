// no side effects
//input --> output

const array = [1,2,3,4]
function removeLastItem(arr){
    const newArray = [].concat(arr); //Concat sirve para poder hacer una copia del array en este caso y poder guardar esta informacion en otro sitio
    newArray.pop()
    return newArray;
}
function multiply2(arr){
    return arr.map(item => item*2)
}
console.log(removeLastItem(array));
console.log(multiply2(array));
console.log(array);

//Imperative vs Declarative
//Imperativo: se le dice a la maquina que y como quieres que lo haga
//Declarativo: Que hacer y que deberia pasar
//HOF: High Order Functions
const hof = () => () => 5;
console.log(hof()())
const hof2 = (fn) => fn(5);
hof2(function a(x){return x})
//Closure
//Closure
const closure = function() {
    let count = 55;
    return function getCounter() {
      return count;
    }
  }
  
  const getCounter = closure()
  getCounter()
  getCounter()
  getCounter()

//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5) //Esto implica llamar a esta funcion una sola vez
multiplyBy5(20)

//Partial Application
const multiply2 = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply2.bind(null, 5)
partialMultiplyBy5(10, 20) // De esta forma multiply espera en la llamada todos los argumentos