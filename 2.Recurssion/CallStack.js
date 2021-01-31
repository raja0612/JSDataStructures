/*

Recursion is a process (in our case a function) which calls itself.

A function calls itsself is a recurssion.

*/

function takeShower() {
    return "Showering";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}


function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok Ready to Work!");
}

wakeUp();