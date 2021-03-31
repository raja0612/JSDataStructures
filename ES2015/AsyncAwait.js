/*
Async function allows us to not deal with call back hell and
make the entire code look simple

async functionName() {

    await return promise; // waits until promise is fullfilled
}

*/

// suppose we need to perform three asynchronous operations in the following seequence

/*

1. get user from db 
2. get user services
3. calculate services cost

*/

function getUser(userId, callback) {
    setTimeout(()=> {
        callback({
            userId: userId,
            name: 'Raj'
        })

    }, 1000)
}

function getUserServices(userId, callback) {
    setTimeout(()=> {
        callback(["NetFlix", "HBO", "Prime"])
    }, 2000)
}

function getServicesCost(noOfServices, callback) {
    setTimeout(()=> {
        callback(noOfServices * 10);
    }, 3000)
}


getUser(1, function(user) {
    console.log("USER", user);
    getUserServices(user.userId, function(services){
        console.log("USER SERVICES", services);
       getServicesCost(services.length, function(cost) {
           console.log("COST", cost);
       } )
    })
})

// to avoid callback hell, ES6 introduced promises

function getUserPromise(userId) {
    console.log("getUserPromise");
    return new Promise((resolve, rejct) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                name: 'Raj'
            })
        }, 1000)
    })
}

function getUserServicesPromsie(userId) {
    console.log("getUserServicesPromsie");
    return new Promise((resolve, reject) => {
         setTimeout(()=> {
              resolve(["HBO","NETFLIX", "PRIME"]);
         }, 2000)
    })
}

function serviceCostPromise(services) {
    console.log("serviceCostPromise");
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           resolve(services.length * 10);
        }, 3000)
    })
}

getUserPromise(1)
.then(getUserServicesPromsie)
.then(serviceCostPromise)
.then(console.log)


// ES2017 introduced async/await keyword, that build on top of promises, allowing us to write 
// asychronous code, that looks synchronous code and more readble

async function totalCost() {
    let user = await getUserPromise(1);
    let services = await getUserServicesPromsie(user.userId);
    let cost = await serviceCostPromise(services);

    console.log("async/await", cost)
}

totalCost();


// fucntion with async keyword is asynchronous function, it returns promise always

async function sayHI() {
    return "HI";
}

sayHI().then(console.log)

async function sayHiPromise() {
    return Promise.resolve("HI RAJ");
}

sayHiPromise().then(console.log)

// await keyword to wait for Promise to either resolved or rejected
//we can use the wait keyword only inside async function

async function runAsyncFn() {
    console.log("runAsyncFn");
    let result = await sayHiPromise();
    console.log(result);
}

runAsyncFn();

// Handling erros

async function divide(x, y) {
    if( y === 0 || retry) {
        Promise.reject(new Error("You can't divide by zero"));
    }
}

divide(1, 0)
.then(res => console.log(res))
.catch(err => console.log(err))


async function handleErrorPromise() {
    try {
        let promise = await Promise.reject(new Error("Promise Rejected"))
    } catch(e) {
        console.log("Promise rejected error", e);
    }
}

handleErrorPromise();


