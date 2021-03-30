/*

Promise is an object which will have a value in future.

Promise has three states pending, resolved, rejected.

Promise is used to handle the asychrnous code.
*/

// Promise creation

// Promise constructor is used to create a promise and  it takes two clalback functions resolve and reject.
// resolve contains fullfilled state of value, reject conatins rejected state value
//Initial state is pending

let condition = true;

let myPromise = new Promise((resolve, reject) => {
    if(condition) {
        return resolve('I will complete Javascript');
    }
    return reject('Sorry, I failed again');
})

console.log(myPromise) // it will pring pending state

function makePromise(dedication) {
    return  new Promise(function(resolve, reject) {
        setTimeout(()=> {
            if(dedication) {
                resolve("That's the  sprit, hard work always pay off");
            } else {
                reject("It's okay Buddy, There is a light at end of the tunnel");
            }
        },  3 *1000)

   })
}

console.log(makePromise(true));


//  consuming promise  is done by three callbacks, then catch, finally


makePromise(true).then(
    succcess => console.log(succcess),
    reason => console.log(reason)
)

makePromise(false).then(
    succcess => console.log(succcess),
    reason => console.log(reason)
)

makePromise(false).catch(
    error => console.log(error)
)

makePromise(true)
.then(success => console.log(success))
.catch(error => console.log(error))
.finally(() => console.log("This is where we handle default operations like retry close connections"));



const fetch = require("node-fetch");

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() =>  console.log("retry again"))