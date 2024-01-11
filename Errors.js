function fail() {
    try {
        console.log('this works')
    }
    catch (error) {
        console.log('we have an error', error)
    }
}

fail()

    (async function () {
        try {
            await Promise.resolve("FIRST")
            await Promise.reject("SECOND")
        } catch (error) {
            console.log("is this good?", error)
        }
    })()

Promise.resolve('asyncfail')
    .then(response => {
        Promise.resolve().then(() => {
            throw new Error('Error 1')
        }).catch(console.log())
        return 5;
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'auth'
        this.favouriteSnack = 'grapes'
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.favouriteSnack = 'grapes'
    }
}
class PermisionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PermisionError'
        this.favouriteSnack = 'grapes'
    }
}
const a = new DatabaseError('oopsie')
console.log(a instanceof DatabaseError)