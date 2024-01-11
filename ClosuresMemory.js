//Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)')
    console.log('created')
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavy = heavyDuty2();
getHeavy(688)
getHeavy(788)
getHeavy(888)


//Closures
function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)')
    console.log('created again')
    return function (index) {
        return bigArray[index]
    }
}

//Encapsulation
const makeNuclearButton = () => {
    let timeTithoutDestruction = 0;
    const passTime = () => timeTithoutDestruction++;
    const totalPeaceTime = () => timeTithoutDestruction;
    const launch = () => {
        timeTithoutDestruction = -1
        return 'boom'
    };
    setInterval(passTime, 1000)

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime()

const makeNuclearButton2 = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }

    setInterval(passTime, 1000);
    return { totalPeaceTime }
}

const ww3 = makeNuclearButton2();
ww3.totalPeaceTime()

//EXERCISE
let view;

function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
        } else {
            view = 'mountain';
            called++;
            console.log('view has been set')
        }
    }
}

const startOnce = initialize();
startOnce();
console.log(view)

//EXERCISE
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('Im at index ' + array[i])
    }, 3000)
}

//Other way
const array2 = [1, 2, 3, 4];
for (let i = 0; i < array2.length; i++) {
    (function(closure) {
        setTimeout(function () {
            console.log('Im at index ' + array2[closure])
        }, 3000)
    })(i)
}