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



/*
const fetch = require("node-fetch");

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() =>  console.log("retry again"))

  */



  //Promise.all() Promise.allSettled()

  // Both takes array of promises and returns an array containing fullfilled promises.

  //Promise.all will reject as soon as one of the Promises in the array rejects.
  //Promise.allSettled will never reject, it will resolve once all Promises in the array have either rejected or resolved.


  let promise1 = new Promise((resolve, reject) => resolve(1));
  let promise2 = new Promise((resolve, reject) => resolve("Raj"));
  let promise3 = new Promise((resolve, reject) => {
    setTimeout( () => {
         resolve("After 3 secs you will see me")
    }, 3 * 1000)
  });


  let allPromises = [promise1, promise2, promise3];

  Promise.all(allPromises). then(res => {
    console.log("Each Promise res", res);
  })

  // [1, "Raj", "After 3 secs you will see me"];

  let promise4 = new Promise((resolve, reject) => resolve("Resolved 4"));

  let promise5 = new Promise((resolve, reject) => reject("Rejected 5"));

  let promise6 = new Promise((resolve, reject) => resolve("Resolved 6"));

  Promise.all([promise4, promise5, promise6])
  .then(res => console.log(res))
  .catch(err => console.log(err));

  Promise.allSettled([promise4, promise5, promise6])
  .then(res => console.log(res))
  .catch(err => console.log(err));