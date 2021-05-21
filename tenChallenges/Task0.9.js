function filterVowels(userWord){
    userWord = userWord.toLowerCase();
    var letter = userWord.split("");
    let unique = [...new Set(letter)];
    var combinedLetters = "";
    for (var x = 0; x < unique.length; x++){
            combinedLetters = combinedLetters + unique[x];
        }  
        var vowels = combinedLetters.match(/[aeiou]/ig).join(", ");
        return vowels;        
}
console.log(filterVowels("Umuzi"));
