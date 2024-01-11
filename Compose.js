//Compose
const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num * 3
const makePositive = (num) => Math.abs(num)

const multiplyby3Absolute = compose(multiplyBy3, makePositive)

console.log(multiplyby3Absolute(-50))

//Pipe
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy5 = (num) => num * 5
const makePositive2 = (num) => Math.abs(num)

const multiplyby3Absolutes = pipe(multiplyBy5, makePositive2)

console.log(multiplyby3Absolutes(-50))

//La diferencia entre ambas es simple, Pipe realizará la función de derecha a izquierda mientras que compose al reves
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)