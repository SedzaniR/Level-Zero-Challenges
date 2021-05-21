function findCommonCharacters(firstWord,secondWord){
    firstLetters = firstWord.split("");
    let uniqueFirst = [...new Set(firstLetters)];
    secondLetters = secondWord.split("");
    let uniqueSecond = [...new Set(secondLetters)];
    var combinedLetters = new Array();
    for (var x = 0; x < uniqueFirst.length;x++ ){
        if(uniqueSecond.includes(uniqueFirst[x])){
            combinedLetters.push(uniqueFirst[x]);
        }
    }
    return combinedLetters.join(", ");  
}
console.log(findCommonCharacters("Hoooooooouse","Computers"));
