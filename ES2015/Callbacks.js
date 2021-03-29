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
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // function declared in the loaded script
  });

console.log("This line is exexutedbefore loadScript() completes");