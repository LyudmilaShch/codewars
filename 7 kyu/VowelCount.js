function getCount(str) {
    let result = 0;
    let myArr =['a', 'e', 'i', 'o', 'u'];
    for (let char of str){
        if (myArr.includes(char)){
            result++;
        }
    }
    return result;
}
console.log(getCount("abracadabr"));

/*Количество классных
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

