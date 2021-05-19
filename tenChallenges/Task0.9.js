function filterVowels(user_word){
    user_word = user_word.toLowerCase();
    var letter_array = user_word.split("");
    let unique = [...new Set(letter_array)];
    var a = "";
    for (var x = 0; x < unique.length; x++){
            a = a + unique[x];
        }  
        var vowels = a.match(/[aeiou]/ig).join(", ");
        return vowels;        
}
const b = filterVowels("Umuzi");
console.log(b);
