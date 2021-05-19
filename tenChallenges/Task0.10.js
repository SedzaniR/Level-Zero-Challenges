function findCommonCharacters(first,second){
    first_array = first.split("");
    let unique_first = [...new Set(first_array)];
    second_array = second.split("");
    let unique_second = [...new Set(second_array)];
    var a = new Array();
    for (var x = 0; x < unique_first.length;x++ ){
        if(unique_second.includes(unique_first[x])){
            a.push(unique_first[x]);
        }
    }
    return a.join(", ");  
}
const b = findCommonCharacters("Hoooooooouse","Computers");
console.log(b);