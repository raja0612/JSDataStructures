var a = 3;
function sum() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce((acc, current) => {   

          if(!isNaN(current)) {
               return  acc + current;
            } else {
                throw Error("Non numeric argument"+current);
            }
         
        }, 0);
   }

sum(1,2,3);

