// STICK
// wincounter = 0
// Loop 100 times.
// 3 variables of bools
// 1 of the 3 coantisn true
// 2 of the 3 contain false
// each loop randomly assign the 1 true and 2 falses to the 3 variables.
// pick one of the tree variables at random.
// remember one of the remaining 2 that had a false.
// if own door had a true, wincounter++

// SWITCH
// wincounter = 0
// Loop 100 times.
// 3 variables of bools
// 1 of the 3 coantisn true
// 2 of the 3 contain false
// each loop randomly assign the 1 true and 2 falses to the 3 variables.
// pick one of the tree variables at random.
// remember one of the remaining 2 that had a false.
// switch to the one remaining door.
// if own (switched to) door had a true, wincounter++

const repetitions = 1000

console.log("Repetitions per strategy: " + repetitions)
console.log("")

winsWhenSticking = StickStrategy()
console.log("Wins when STAYING: " + winsWhenSticking);
console.log("Winrate: " + Math.round(winsWhenSticking / repetitions * 100) + "%");

console.log("")

winsWhenSwitch = SwitchStrategy()
console.log("Wins when SWITCHING: " + winsWhenSwitch);
console.log("Winrate: " + Math.round(winsWhenSwitch / repetitions * 100) + "%");

function StickStrategy() {
    var wincounter = 0;
    var doors = [false, false, false];

    for (var index = 0; index <= repetitions; index++) {
        doors = [false, false, false];

        var doorWithTrue = Math.floor(Math.random() * 3);
        doors[doorWithTrue] = true;

        var pickedDoor = Math.floor(Math.random() * 3);

        if (doors[pickedDoor]) {
            wincounter++;
        }
    }

    return wincounter
}

function SwitchStrategy() {
    var wincounter = 0;
    var doors = [false, false, false];

    for (var index = 0; index <= repetitions; index++) {
        doors = [false, false, false];

        var doorWithTrue = Math.floor(Math.random() * 3);
        doors[doorWithTrue] = true;

        var pickedDoor = Math.floor(Math.random() * 3);

        var indexOfRemainingDoorWithFalse = GetIndexOfRemaningDoorWithFalse(doors, pickedDoor);

        pickedDoor = 3 - (pickedDoor + indexOfRemainingDoorWithFalse); 

        if (doors[pickedDoor]) {
            wincounter++;
        }
    }

    return wincounter
}


function GetIndexOfRemaningDoorWithFalse(doors, pickedDoor) {
    for (var index = 0; index <= 3; index++) {
        if (index == pickedDoor) {
            continue;
        }
        if (!doors[index]) {
            return index;
        }
    }
}

