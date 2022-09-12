function accum(s) {
let result = [];
myarr = (s+'').split('');
    for(var i = 0;i < s.length;i++) {
        if (i < s.length-1){
         result.push(myarr[i].toUpperCase()+myarr[i].repeat(i).toLowerCase()+"-");
        } else {
            result.push(myarr[i].toUpperCase()+myarr[i].repeat(i).toLowerCase());
        }
    }
 return result.join('').toString();
}
console.log(accum("aBcd"));

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/