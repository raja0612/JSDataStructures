/*

callback is a function that is passed to another fucntion as a parameter.
and callback function is executed afer first is executed.
*/


function add(x, y, callback) {
    callback(x+y);
}


add(10, 20, (result) => {
    console.log(result);
});

//Nested call backs

add(10, 20, (result) => {
    console.log(result);

    add(10, 20, (result) => {
        console.log(result);
    });
    add(10, 20, (result) => {
        console.log(result);
    });
});



// asychrnous actions : actions that we initiate now but they finish later (ex: setTimeout, loading scripts and modules);



// synchronous call backs

function isEven(num) {
  return num % 2 === 0
}

console.log([1, 2, 3, 4].filter(isEven)); 

// here isEven is callback functon, which is executed after filter function is executed



// asynchrnous call backs

function download(url, callback) {
  setTimeout( () => {
    console.log(`Downloading image ${url}`);
    callback(url);
  }, 3 * 1000)
}


download("www.google.com/image", function(url) {
  console.log(`processing image ${url}`);
});

// Handling errors

function download2(url, success, failure) {
  setTimeout( () => {
    console.log(`Downloading image ${url}`);
    let error = url.length === 0 || !url;
    error ? failure("error") : success("success");
  },3 * 1000)}

download2("",function(res){
  console.log(`${res}`);
}, 
function(err) {
  console.log(`${err}`);
})

//Nesting callbacks and the Pyramid of Doom


function download3(url, callback) {
  setTimeout( () => {
    console.log(`Downloading ${url}`);
    callback(url);
  }, 3 * 1000)
}


download3("url1", function(url) {
  console.log("Processing "+url);

  download3("url2", function(url) {
    console.log("Processing "+url);

    download3("url3", function(url) {
      console.log("Processing "+url);
    })
  })
})

// Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell:
/*

asyncFunction(function(){
  asyncFunction(function(){
      asyncFunction(function(){
          asyncFunction(function(){
              asyncFunction(function(){
                  ....
              });
          });
      });
  });
});

*/

//NOTE : To avoid the pyramid of doom, you use promises or async/await functions.


