//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
    let charSet = new Set();
    for (let i = 0; i < input.length; i++) {
        if (charSet.has(input[i])) {
            return input[i]
        } else {
            charSet.add(input[i])
        }
    }
    return undefined;
}//0(n)
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))

function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i]
        } else {
            map[input[i]] = true
        }
        console.log(map)
    }

    return undefined
}//0(n)

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
