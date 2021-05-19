function maximumNumber(a,b,c){
    var greatest = arguments[0];
     for (var x = 1; x < 3; x++){
        if (greatest < arguments[x]){
            greatest = arguments[x];
        }
  }
  return greatest;
}
// updated function, overloading
function maximumNumber(...args){
greatest = args[0];
    for (var x = 1; x < args.length;x++){

    if(greatest<args[x]){
        greatest =  args[x];
         }
    }
    return greatest;
}
const a = maximumNumber(3,4,5);
console.log("The maximum number is "+a);

const b = maximumNumber(3,5,67,8,9);
console.log("The maximum number is "+b);


