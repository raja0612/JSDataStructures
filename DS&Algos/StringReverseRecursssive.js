function reverse1(str) {
    if(str.length === 1) return str;
    let reverse;
    for(let i =str.length; i>=0; i--) {
      reverse = reverse + str[i]
    }
    return reverse;
}

reverse('abc');


function reverse2(str) {
    if(str.length === 1) return str;
    return     str.split().reverse().join();;
}


function reverse3(str) {
    if(str.length === 1) return str;
    return reverse3(str.slice(1)) + str[0];    
}