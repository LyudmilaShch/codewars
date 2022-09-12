function isIsogram(str){
    var ch = '';
        for (let i = 0; i <= str.length-1; i++){
        ch = str[i].toLowerCase();
        var count = str.toLowerCase().split(ch).length-1;
        if (count > 1){
            return false;
        }
        }  
        return true;
}
console.log(isIsogram("isogram"))

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)*/