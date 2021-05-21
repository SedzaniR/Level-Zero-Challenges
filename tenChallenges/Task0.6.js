function maximumNumber(...args){
greatest = args[0];
    for (var x = 1; x < args.length;x++){
    if(greatest<args[x]){
        greatest =  args[x];
         }
    }
    return greatest;
}
console.log(maximumNumber(3,4,5));
console.log(maximumNumber(3,5,67,8,9));


