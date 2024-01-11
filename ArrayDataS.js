const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

console.log(strings[2])

//push = Añade algo al final del array //0(1)
strings.push('e');
strings.push('d')
console.log(strings)

//pop = Remove el ultimo elemento del array //0(1)
strings.pop();
strings.pop();
console.log(strings)

//Unshift = Añade al principio del array //0(n)
//Esto implica iterar todo el array y cambiar la posición del resto del array
strings.unshift('x')
console.log(strings)


//Splice = Permite añadir el valor en el medio del array
//Se elige a partir de que posición o si se quiere eliminar el elemento que hay en esa posición actualmente antes de añadir
//Aquí solo se cambia la posicion del array a partir de la mitad // 0(n) // 0(n/2)
strings.splice(2, 0, 'alien')
console.log(strings)

strings.fill('hey que tal', 0, 7)
console.log(strings)


class MyArray {
    constructor() {
        this.lenght = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.lenght] = item;
        this.lenght++
        return this.lenght
    }

    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shifItems(index);
        return item;
    }

    shifItems(index) {
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.lenght - 1]
        this.lenght--;
    }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('you')
//newArray.pop()
newArray.delete(0)
console.log(newArray)

function reverse(str) {
    if (!str || str.lenght < 2 || typeof str !== 'string') {
        return 'use a string thanks'
    }

    const backawards = []
    const itemslenght = str.length - 1;
    for (let i = itemslenght; i >= 0; i--) {
        backawards.push(str[i]);
    }
    return backawards.join('');
}

function reverse2(strg) {
    return strg.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

console.log(reverse('Hi my name is Mario'));
console.log(reverse2('Hi my name is Mario'));
console.log(reverse3('Hi my name is Mario'));
console.log(reverse4('Hi my name is Mario'));


function mergeSortedArrays(strg, strg2) {
    const sorted = [];
    let array1 = strg[0];
    let array2 = strg2[0];
    let i = 1;
    let j = 1;

    //Check si uno de los dos esta vacío
    if (array1.lenght === 0) {
        return array2;
    }
    if (array2.lenght === 0) {
        return array1;
    }

    while (array1 || array2) {
        if (!array2 || array1 < array2) {
            sorted.push(array1)
            array1 = strg[i]
            i++;
        } else {
            sorted.push(array2)
            array2 = strg2[j]
            j++;
        }
    }
    return sorted;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArrays(arr1, arr2) {
    const sorted = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i]);
            i++;
        } else {
            sorted.push(arr2[j]);
            j++;
        }
    }

    // Agregar los elementos restantes de arr1
    while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    }

    // Agregar los elementos restantes de arr2
    while (j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    }

    return sorted;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let index1 = 0;
    let index2 = 0;

    // Función para comparar y agregar elementos al array resultante
    function addToMergedArray(element) {
        mergedArray.push(element);
    }

    // Función para agregar elementos restantes de un array al array resultante
    function addRemainingElements(sourceArray, index) {
        while (index < sourceArray.length) {
            addToMergedArray(sourceArray[index]);
            index++;
        }
    }

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            addToMergedArray(arr1[index1]);
            index1++;
        } else {
            addToMergedArray(arr2[index2]);
            index2++;
        }
    }

    // Agregar elementos restantes de arr1 y arr2
    addRemainingElements(arr1, index1);
    addRemainingElements(arr2, index2);

    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
